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

  modules: ['@nuxtjs/tailwindcss', 'nuxt-mail'],

  mail: {
    message: {
      to: 'jennie@gigabit.de',
    },
    smtp: {
      host: 'mail.gigabit.de',
      port: 465,
      secure: true,
      auth: {
        user: 'jennie@gigabit.de',
        pass: '-,95,nTHRESPInAillaCOcILEnteNestAteLe',
      },
    },
  },
};
