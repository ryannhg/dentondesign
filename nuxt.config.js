import postcssPxtorem from 'postcss-pxtorem'

const pkg = require('./package')
const work = require('./static/content/work')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en-US'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: 'KNrJcSrC6c64oBYSlbhG-lMMDKfryLOBUfvwgZxUT78' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.png' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/glk1aqk.css' }
    ],
    script: [
      { src: 'https://use.fontawesome.com/releases/v5.3.1/js/all.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    // CSS file in the project
    // '@/assets/styles/main.css',
    // SCSS file in the project
    '@/assets/styles/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-128883378-1'
    }]
  ],

  /*
  ** Nuxt.js Build
  */
  build: {
    postcss: [
      postcssPxtorem()
    ]
  },
  generate: {
    routes: work.links.map(link => link.url),
    minify: {
      collapseWhitespace: false
    }
  }
}
