import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://srirattanasak.github.io',
  base: process.env.ASTRO_BASE_URL ?? '/SPC_Training',
  integrations: [react(), tailwind()],
});
