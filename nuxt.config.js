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
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Digitool.io' },
      { itemprop: 'name', content: 'Digitool.io' },
      { name: "og:site_name", content: "Digitool.io" },
      { name: "og:type", content: "website" }
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
  },
  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        let position = {}
        if (to.matched.length < 2) {
          position = { x: 0, y: 0 }
        } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
          position = { x: 0, y: 0 }
        }
        if (to.hash) {
          position = { selector: to.hash }
        }
        return position
      }
    }
  }
}
