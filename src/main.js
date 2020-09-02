import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import axios from 'axios'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

Vue.use(VueLodash, { name: 'custom' , lodash: lodash })
Vue.use(Buefy)
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
