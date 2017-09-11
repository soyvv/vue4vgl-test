import Vue from 'vue'
import vgl from 'vue-golden-layout'

import App from './App.vue'

Vue.use(vgl)

new Vue({
  el: '#app',
  render: h => h(App)
})
