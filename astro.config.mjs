import svelte from '@astrojs/svelte';
import turbolinks from '@astrojs/turbolinks';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [svelte(), turbolinks()],
});
