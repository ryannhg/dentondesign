import postcssPxtorem from 'postcss-pxtorem'

const pkg = require('./package')
const work = require('./static/content/work')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/glk1aqk.css' }
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
    routes: work.links.map(link => link.url)
  }
}
