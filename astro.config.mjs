import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://beautiful-kringle-68149a.netlify.app',
  integrations: [sitemap()],
});
