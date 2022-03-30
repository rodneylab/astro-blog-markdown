<script>
  import ExternalLink from '$components/ExternalLink.svelte';
  import FacebookIcon from '$components/Icons/Facebook.svelte';
  import GitHubIcon from '$components/Icons/GitHub.svelte';
  import LinkedinIcon from '$components/Icons/LinkedIn.svelte';
  import TiktokIcon from '$components/Icons/Tiktok.svelte';
  import TwitterIcon from '$components/Icons/Twitter.svelte';
  import RodneyLabCredit from '$components/RodneyLabCredit.svelte';
  import website from '$config/website';
  import { COPYRIGHT_ENTITY } from '$constants/entities';

  const { facebookPage, linkedinProfile, githubPage, tiktokUsername, twitterUsername } = website;
</script>

<footer class="footer-container">
  <div>
    Created by <a
      aria-label="Open the Rodney Lab site"
      href="https://rodneylab.com/"
      target="_blank"
      rel="noopener noreferrer">Rodney Lab</a
    >. Copyright {COPYRIGHT_ENTITY} 2022.
  </div>
  <nav class="footer-icons" aria-label="Links to external sites">
    <ul>
      <li class="hover-jump">
        <ExternalLink
          ariaLabel="Go to the Rodney Lab Tik Tok Page"
          href={`https://www.tiktok.com/${tiktokUsername}`}><TiktokIcon /></ExternalLink
        >
      </li>
      <li class="hover-jump">
        <ExternalLink ariaLabel="Go to the Rodney Lab Facebook Page" href={facebookPage}
          ><FacebookIcon /></ExternalLink
        >
      </li>
      <li class="hover-jump">
        <ExternalLink
          ariaLabel="Go to the Rodney Lab Twitter Page"
          href={`https://twitter.com/intent/user?screen_name=${twitterUsername}`}
          ><TwitterIcon /></ExternalLink
        >
      </li>
      <li class="hover-jump">
        <ExternalLink
          ariaLabel="Go to the Rodney Lab Linked In Page"
          href={`https://uk.linkedin.com/in/${linkedinProfile}`}><LinkedinIcon /></ExternalLink
        >
      </li>
      <li class="hover-jump">
        <ExternalLink
          ariaLabel="Go to the Rodney Lab Git Hub In Page"
          href={`https://github.com/${githubPage}`}><GitHubIcon /></ExternalLink
        >
      </li>
    </ul>
  </nav>
  <RodneyLabCredit />
</footer>

<style>
  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: var(--max-width-wrapper);
    margin: var(--spacing-12) auto var(--spacing-0);
    width: 100%;
  }

  .footer-icons {
    display: flex;
    list-style-type: none;
  }
  .footer-icons ul {
    display: flex;
    margin: var(--spacing-6) var(--spacing-0);
  }
  .footer-icons li {
    display: flex;
    margin: var(--spacing-0) var(--spacing-4) var(--spacing-0) var(--spacing-0);
    font-size: var(--font-size-3);
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
