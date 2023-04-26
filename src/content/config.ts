import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
	schema: z.object({
		postTitle: z.string(),
		focusKeyphrase: z.string().optional(),
		datePublished: z.string(),
		lastUpdated: z.string(),
		seoMetaDescription: z.string(),
		featuredImage: z.string().optional(),
		featuredImageAlt: z.string().optional(),
		ogImage: z.string().optional(),
		ogSquareImage: z.string().optional(),
		twitterImage: z.string().optional(),
		categories: z.string().array(),
		tags: z.string().array(),
		draft: z.boolean(),
	}),
});

export const collections = {
	posts: postsCollection,
};
