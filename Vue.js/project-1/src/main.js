// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Modules
// Firebase Modules
import VueFire from 'vuefire'
import firebase from './firebase.js'
// Animations
import AOS from 'aos'
import 'aos/dist/aos.css'
// Smooth scroll
import vueSmoothScroll from 'vue2-smooth-scroll'
// Form Validation
import Vuelidate from 'vuelidate'
// Parallax
import VueParallaxJs from 'vue-parallax-js'

// Http
import VueResource from 'vue-resource'

// fonts
import '@/assets/fonts/allura/font.css'
import '@/assets/fonts/andada/font.css'
import '@/assets/fonts/nunito/font.css'
import '@/assets/fonts/ptsans/font.css'
import '@/assets/fonts/raleway/font.css'
import '@/assets/fonts/roboto/font.css'
import '@/assets/fonts/rosamarena/font.css'
import '@/assets/fonts/badscript/font.css'
import '@/assets/fonts/lato/font.css'

// Including Styles
import './assets/sass/style.scss'

import waterwheelCarousel from 'jquery-waterwheel-carousel'

import jQuery from 'jquery'

window.$ = window.jQuery = jQuery

let app

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(vueSmoothScroll)
Vue.use(waterwheelCarousel)
Vue.use(Vuelidate)
Vue.use(VueParallaxJs)

firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    Vue.use(VueFire)

    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      created () {
        AOS.init({
          offset: 100,
          duration: 1000,
          easing: 'ease-out-back',
          delay: 100
        })
      },
      router,
      components: { App },
      template: '<App/>'
    })
    console.log('Run App')
  } else {
    console.log('Ooops')
  }
})
