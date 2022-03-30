<script>
  import { H_ELLIPSIS_ENTITY } from '$constants/entities';

  export let postTitle;
  export let datePublished;
  export let seoMetaDescription;
  export let slug;

  /**
   * @param event {MouseEvent} - click
   */
  const handleMouseEnter = (event) => {
    let element = /** @type {HTMLElement} */ (event.target);
    element.style.cursor = 'pointer';
  };

  /**
   * @param event {MouseEvent} - click
   */
  const handleMouseLeave = (event) => {
    let element = /** @type {HTMLElement} */ (event.target);
    element.style.cursor = 'default';
  };

  const handleMouseDown = (event) => {
    // only override click when user clicks inside element but not on an anchor tag
    if (event.target.tagName !== 'A') {
      window.location.assign(`/${slug}`);
    }
  };

  const dateString = new Date(datePublished).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
  });
  const idString = `blog-post-summary-${slug}`;
</script>

<div
  class="container"
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  on:mousedown={handleMouseDown}
>
  <div class="content">
    <h3>
      <a aria-label={`Open ${postTitle} blog post`} aria-describedby={idString} href={`/${slug}/`}
        >{postTitle}</a
      >
    </h3>
    <p>{dateString}</p>
    <p>{seoMetaDescription}</p>
    <span id={idString} aria-hidden="true">Read more {H_ELLIPSIS_ENTITY}</span>
  </div>
</div>

<style>
  .container {
    display: flex;
    width: var(--max-width-full);
    margin: var(--spacing-12) var(--spacing-0);
  }

  .content {
    width: 80%;
    border: var(--spacing-px-2) solid var(--color-theme-2);
    border-radius: var(--spacing-3);
    margin: var(--spacing-0) auto;
    padding: var(--spacing-4);
  }
  .content h3 {
    margin: var(--spacing-0) var(--spacing-2);
  }
  .content p {
    color: var(--color-theme-1);
    font-size: var(--mobile-font-size-2);
    margin: var(--spacing-2);
  }

  .content:focus,
  .content:hover {
    border-color: var(--color-theme-4);
    background-color: var(--color-theme-4);
    box-shadow: var(spacing-0) var(--spacing-0) var(--spacing-1) var(--spacing-0)
      var(--color-theme-4-alpha-20);
    color: var(--color-accent);
  }

  .content:focus h3,
  .content:hover h3 {
    color: var(--color-theme-2);
  }
  .content:focus p,
  .content:hover p {
    color: var(--color-theme-3);
  }
</style>
