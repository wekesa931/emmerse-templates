import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr'
import Vue2Filters from 'vue2-filters'
import { VueMasonryPlugin } from 'vue-masonry'
import InfiniteLoading from 'vue-infinite-loading'
import firebase from 'firebase/app'
import VueLazyLoad from 'vue-lazyload'
import ProductZoomer from 'vue-product-zoomer'

Vue.use(VueAwesomeSwiper)
Vue.use(Vue2Filters)
Vue.use(VueMasonryPlugin)
Vue.use(InfiniteLoading)
Vue.use(VueLazyLoad)
Vue.use(ProductZoomer)

const config = {
  apiKey: 'Your API Key',
  authDomain: 'Your Auth Domain',
  databaseURL: 'Your Database URL',
  projectId: 'Your ProjectId',
  storageBucket: 'Your Storage Bucket',
  messagingSenderId: 'Your Messaging SenderId'
}
firebase.initializeApp(config)
