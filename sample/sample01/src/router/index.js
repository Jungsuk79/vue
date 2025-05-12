import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Class from '../views/Class.vue'
import Basic from '../views/Basic.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/basic',
      name: 'Basic',
      component: Basic
    },
    {
      path: '/class',
      name: 'Class',
      component: Class
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router