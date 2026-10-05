import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://typemeter.app',
  output: 'static',
  vite: {
    server: {
      host: '0.0.0.0',
      port: 4321,
    },
  },
});
