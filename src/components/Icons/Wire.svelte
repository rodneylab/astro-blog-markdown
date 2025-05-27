<script>
  let {
    label = "Wire (social network) icon",
    colour = "inherit",
    ariaHidden = false,
    width = 24,
    height = width,
  } = $props();
</script>

<div class="logo">
  <svg
    aria-hidden={ariaHidden}
    color={colour}
    aria-label={label}
    role="img"
    {width}
    {height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <use href="/sprite.svg#wire" />
  </svg>
</div>

<style>
  .logo {
    display: flex;
    align-items: center;
  }
</style>
