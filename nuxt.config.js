
export default {
  mode: 'spa',
  env: {
    shopURL: 'https://www.chessa.co.ke/',
    shopID: 'chessa-creations',
    shopName: 'chessa creations',
    shopDescription: 'Authentic ankara wear for ladies and men.',
    shopNumber: '704233752',
    shopEmail: 'chessacreations@gmail.com',
    logo:
      'https://firebasestorage.googleapis.com/v0/b/e-merse.appspot.com/o/pwa%2Fimage-954063?alt=media&token=c55d2bc1-ab5b-43b8-9eb9-85f272403821',
    banner:
      'https://images.unsplash.com/photo-1559634757-9ab59209827b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80',
    location: 'CBD, Nairobi',
    facebookPage: 'https://www.facebook.com/ChessaCreations/',
    twitterPage: '',
    instagramPage: 'https://www.instagram.com/chessacreations/?hl=en'
  },
  subdirectory: '/',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.shopName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.shopDescription }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/chessafavicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900' }
    ],
    script: []
  },
  router: {
    base: '/'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff4c3b', throttle: 200, height: '3px' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/app.scss',
    'swiper/dist/css/swiper.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/collectchat.js', ssr: false },
    { src: '~plugins/ga.js', ssr: false },
    { src: '~/plugins/plugin.js', ssr: false },
    { src: '~/plugins/localStorage.js', ssr: false }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/eslint-module',
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  generate: {
    fallback: true
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [
      'vee-validate/dist/rules'
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
