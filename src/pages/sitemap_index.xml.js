import website from '~config/website';

const { siteUrl } = website;

export async function get({ request }) {
	const { url } = request;
	const { hostname, port, protocol } = new URL(url);
	const baseUrl = import.meta.env.PROD ? siteUrl : `${protocol}//${hostname}:${port}`;

	const postModules = await import.meta.glob('../content/posts/**/index.md');
	const posts = await Promise.all(Object.keys(postModules).map((path) => postModules[path]()));
	const lastPostUpdate = posts.reduce((accumulator, { frontmatter: { lastUpdated } }) => {
		const lastPostUpdatedValue = Date.parse(lastUpdated);
		return lastPostUpdatedValue > accumulator ? lastPostUpdatedValue : accumulator;
	}, 0);

	const lastPostUpdateDate = new Date(lastPostUpdate).toISOString();

	const xmlString = `
<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="${baseUrl}/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<sitemap>
		<loc>${baseUrl}/page-sitemap.xml</loc>
		<lastmod>${lastPostUpdateDate}</lastmod>
	</sitemap>
	<sitemap>
		<loc>${baseUrl}/post-sitemap.xml</loc>
		<lastmod>${lastPostUpdateDate}</lastmod>
	</sitemap>
</sitemapindex>`.trim();

	return { body: xmlString };
}
