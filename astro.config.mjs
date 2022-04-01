import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  buildOptions: {
    site: 'https://example.com',
    sitemap: true,
  },
  integrations: [svelte()],
});
