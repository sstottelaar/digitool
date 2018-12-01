const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Digitool.io',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3653f4' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-lazyload'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'kenticocloud-nuxt-module',
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    ['@nuxtjs/google-tag-manager', {
      id: 'GTM-TGLJQWL'
    }],
    '@nuxtjs/toast',
    ['nuxt-sass-resources-loader', [
        '@/assets/scss/fonts.scss',
        '@/assets/scss/variables.scss'
    ]]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  kenticocloud: {
    projectId: 'ba55e5f7-e14b-42bc-aaac-63d470ce44ae'
  },
  toast: {
    position: 'bottom-right',
    duration: 1500,
    containerClass: 'toasted-custom'
  }
}
