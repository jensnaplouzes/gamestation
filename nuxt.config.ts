// nuxt.config.ts
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default {
  devtools: {
    enabled: true,
    timeline: { enabled: true },
  },
  debug: process.env.NODE_ENV !== 'production',
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [],
  },
};
