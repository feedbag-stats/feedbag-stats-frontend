const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},

  /*
  ** Global CSS
  */
  css: ["/assets/scss/app.scss"],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~/plugins/vue-bootstrap.js",
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    ['bootstrap-vue/nuxt', {css: false}],
  ],

  build: {
    //transpile: [/^vue2-google-maps($|\/)/],
    /*
         ** Run ESLint on save
         */
    extend(config, {isDev, isClient}) {
      if (false && isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
      if (!isClient) {
      }
    },
    vendors: ["babel-polyfill", 'aframe'],
  },
  vue: {
    loaders: {
      scss: "style!css!sass",
    },
  },
}
