import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import axios from 'axios'
import VueLodash from 'vue-lodash'
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);


const options = { name: 'lodash' } // customize the way you want to call it
Vue.use(VueLodash, options) // options is optional
Vue.use(Buefy)
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
