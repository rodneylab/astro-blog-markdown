import svelte from '@astrojs/svelte';
import { defineConfig } from 'astro/config';

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
	preview: { port: 3001 },
	server: { port: 3001 },
	site: 'https://example.com',
	integrations: [svelte()],
});
