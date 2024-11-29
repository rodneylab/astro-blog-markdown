import { image_placeholder } from "@rodneylab/picpack";
import { defineCollection, z } from "astro:content";
import { readFile } from "node:fs/promises";

const postsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      postTitle: z.string(),
      focusKeyphrase: z.string().optional(),
      datePublished: z.string(),
      lastUpdated: z.string(),
      seoMetaDescription: z.string(),
      featuredImage: image(),
      featuredImageAlt: z.string(),
      ogImage: z.string().optional(),
      ogSquareImage: z.string().optional(),
      placeholder: z.string().transform(async (value) => {
        const { buffer } = await readFile(`./src/content/posts/${value}`);
        const imageBytes = new Uint8Array(buffer);
        const { base64 } = image_placeholder(imageBytes);
        return base64;
      }),
      twitterImage: z.string().optional(),
      categories: z.string().array(),
      tags: z.string().array(),
      draft: z.boolean(),
    }),
});

export const collections = {
  posts: postsCollection,
};
