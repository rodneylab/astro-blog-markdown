import rss from '@astrojs/rss';
import website from '~config/website';
import { getCollection } from 'astro:content';

const { siteTitle, siteUrl } = website;

export async function GET() {
	const items = (await getCollection('posts'))
		.sort(
			({ data: { datePublished: datePublishedA } }, { data: { datePublished: datePublishedB } }) =>
				new Date(datePublishedB).valueOf() - new Date(datePublishedA).valueOf(),
		)
		.map(
			({ data: { datePublished, postTitle: title, seoMetaDescription: description }, slug }) => ({
				title,
				description,
				link: `${siteUrl}/${slug}/`,
				pubDate: new Date(datePublished),
			}),
		);

	return rss({
		title: siteTitle,
		stylesheet: true,
		description: siteTitle,
		site: siteUrl,
		customData: `<language>en-gb</language>`,
		items,
	});
}
