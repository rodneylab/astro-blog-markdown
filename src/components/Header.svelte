<script>
  import CameraIcon from '$components/Icons/Camera.svelte';
</script>

<header class="header-container">
  <a aria-label="Jump to Home page" class="hover-jump logo" href="/"><CameraIcon width={96} /></a>
  <nav class="nav">
    <ul>
      <li><a href="/.">Home</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</header>

<style>
  .header-container {
    display: flex;
    align-items: flex-end;
    max-width: var(--max-width-wrapper);
    width: var(--max-width-full);
    margin: var(--spacing-0) auto var(--spacing-12);
  }
  .nav {
    display: flex;
    margin-left: auto;
    list-style-type: none;
  }

  .nav ul {
    display: flex;
    align-items: flex-end;
    padding-bottom: var(--spacing-0);
    margin-bottom: var(--spacing-0);
  }
  .nav ul li {
    display: flex;
    font-size: var(--font-size-4);
    margin-left: var(--spacing-6);
    margin-bottom: var(--spacing-1);
  }
  .logo {
    color: var(--color-theme-1);
  }

  .hover-jump {
    transition: all 0.25s ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .hover-jump {
      transition: all 2s ease-in-out;
    }
  }

  .hover-jump:focus,
  .hover-jump:hover {
    transform: translateY(calc(1 * var(--spacing-2)));
  }
</style>
