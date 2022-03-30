<script>
  import BlogPostSummary from '$components/BlogPostSummary.svelte';
  import { H_ELLIPSIS_ENTITY } from '$constants/entities';

  export let initialPosts = 4;

  /** @type {{datePublished: string; postTitle: string; seoMetaDescription: string; slug: string;}[]} */
  export let posts;

  const postCount = posts.length;
  $: showPosts = initialPosts;
  $: displayPosts = posts.slice(0, showPosts);

  const handleClick = () => {
    showPosts += initialPosts;
  };
</script>

<section role="feed">
  <h2>BLOG POSTS</h2>
  {#each displayPosts as { datePublished, postTitle, seoMetaDescription, slug }, index}
    <article aria-posinset={index + 1} aria-setsize={postCount}>
      <BlogPostSummary {datePublished} {postTitle} {seoMetaDescription} {slug} />
    </article>
  {:else}
    <p>No posts yet!</p>
  {/each}
  {#if showPosts < postCount}
    <button type="submit" on:click={handleClick}>See more {H_ELLIPSIS_ENTITY}</button>
  {/if}
</section>
