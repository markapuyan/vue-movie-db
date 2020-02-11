import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/pages/Main'
import MovieInfo from '@/components/MovieInfo/MovieInfoComponent'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/movie/:id',
    name: 'MovieInfo',
    component: MovieInfo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
