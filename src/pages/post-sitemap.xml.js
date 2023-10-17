import website from '~config/website';
import { getCollection } from 'astro:content';

const { siteUrl } = website;

export async function GET({ request }) {
	const { url } = request;
	const { hostname, port, protocol } = new URL(url);

	const baseUrl = import.meta.env.PROD ? siteUrl : `${protocol}//${hostname}:${port}`;
	const postsXmlString = (await getCollection('posts'))
		.sort(
			({ data: { datePublished: datePublishedA } }, { data: { datePublished: datePublishedB } }) =>
				new Date(datePublishedB).valueOf() - new Date(datePublishedA).valueOf(),
		)
		.map(
			({ data: { lastUpdated }, slug }) => `
<url>
  <loc>${baseUrl}/${slug}/</loc>
  <lastmod>${new Date(lastUpdated).toISOString()}</lastmod>
</url>`,
		);

	const xmlString = `
<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="${baseUrl}/sitemap.xsl"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${postsXmlString.join('\n')}
</urlset>`.trim();

	return { body: xmlString };
}
