const facebookPageName = import.meta.env ? import.meta.env.PUBLIC_FACEBOOK_PAGE : '';
const facebookAuthorPageName = import.meta.env ? import.meta.env.PUBLIC_FACEBOOK_AUTHOR_PAGE : '';

const website = {
  author: 'Rodney Johnson',
  ogLanguage: 'en_GB',
  siteLanguage: 'en-GB',
  siteTitle: 'Astro Blog Markdown',
  siteShortTitle: 'Astro Blog',
  siteUrl: import.meta.env ? /** @type {string} */ (import.meta.env.PUBLIC_SITE_URL) : '',
  icon: 'public/icon.png',
  backgroundColor: '#1b4079',
  themeColor: '#d62828',
  contactEmail: import.meta.env ? import.meta.env.PUBLIC_CONTACT_EMAIL : '',
  facebookAuthorPage: `https://www.facebook.com/${facebookAuthorPageName}`,
  facebookAuthorPageName,
  facebookPage: `https://www.facebook.com/${facebookPageName}`,
  facebookPageName,
  githubPage: import.meta.env ? import.meta.env.PUBLIC_GITHUB_PAGE : '',
  linkedinProfile: import.meta.env ? import.meta.env.PUBLIC_LINKEDIN_PROFILE : '',
  telegramUsername: import.meta.env ? import.meta.env.PUBLIC_TELEGRAM_USERNAME : '',
  tiktokUsername: import.meta.env ? import.meta.env.PUBLIC_TIKTOK_USERNAME : '',
  twitterUsername: import.meta.env ? import.meta.env.PUBLIC_TWITTER_USERNAME : '',
  twitterUserId: import.meta.env ? import.meta.env.PUBLIC_TWITTER_ID : '',
  wireUsername: import.meta.env ? import.meta.env.PUBLIC_WIRE_USERNAME : '',
};

export default website;
