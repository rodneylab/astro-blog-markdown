import website from '~config/website';

const { siteUrl } = website;

export async function get({ request }) {
	const { url } = request;
	const { hostname, port, protocol } = new URL(url);

	const baseUrl = import.meta.env.PROD ? siteUrl : `${protocol}//${hostname}:${port}`;
	const postModules = await import.meta.glob('../content/posts/**/index.md');
	const posts = await Promise.all(Object.keys(postModules).map((path) => postModules[path]()));
	const postsXmlString = posts.map(({ file, frontmatter: { lastUpdated } }) => {
		const slug = file.split('/').at(-2);
		return `
<url>
  <loc>${baseUrl}/${slug}/</loc>
  <lastmod>${new Date(lastUpdated).toISOString()}</lastmod>
</url>`;
	});

	const xmlString = `
<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="${baseUrl}/sitemap.xsl"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${postsXmlString.join('\n')}
</urlset>`.trim();

	return { body: xmlString };
}
