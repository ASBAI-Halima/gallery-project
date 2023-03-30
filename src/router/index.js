import Vue from 'vue'
import VueRouter from 'vue-router'
import PizzasList from '../views/PizzasList.vue'
import PizzaDetails from '../views/PizzaDetails.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'list',
    component: PizzasList
  },
  {
    path: '/details/:id',
    name: 'pizza-details',
    component: PizzaDetails,
    props: true,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
