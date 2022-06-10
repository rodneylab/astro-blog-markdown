import rss from '@astrojs/rss';
import website from '$config/website';

const { siteTitle, siteUrl } = website;

export async function get() {
  const postModules = await import.meta.glob('../content/posts/**/index.md');
  const posts = await Promise.all(Object.keys(postModules).map((path) => postModules[path]()));

  return rss({
    title: siteTitle,
    stylesheet: true,
    description: siteTitle,
    site: siteUrl,
    customData: `<language>en-gb</language>`,
    items: posts
      .sort(
        (
          { frontmatter: { datePublished: datePublishedA } },
          { frontmatter: { datePublished: datePublishedB } },
        ) => Date.parse(datePublishedB) - Date.parse(datePublishedA),
      )
      .map(
        ({
          file,
          frontmatter: { datePublished, postTitle: title, seoMetaDescription: description },
        }) => {
          const slug = file.split('/').at(-2);

          return {
            title,
            description,
            link: `${siteUrl}/${slug}/`,
            pubDate: new Date(datePublished),
          };
        },
      ),
  });
}
