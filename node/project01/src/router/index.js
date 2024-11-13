import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: () => import(/* webpackChunkName: "about", webPrefetch:true*/ '../views/AboutView.vue')
  },

  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "about", webPrefetch:true*/ '../views/TestView.vue')
  },

  {
    path: '/click',
    name: 'click',
    component: () => import(/* webpackChunkName: "event", webPrefetch:true*/ '../views/Event/ClickView.vue')
  },

  {
    path: '/change',
    name: 'change',
    component: () => import(/* webpackChunkName: "change", webPrefetch:true*/ '../views/Event/ChangeView.vue')
  },

  {
    path: '/Key',
    name: 'key',
    component: () => import(/* webpackChunkName: "key", webPrefetch:true*/ '../views/Event/KeyView.vue')
  },

  {
    path: '/render',
    name: 'render',
    component: () => import(/* webpackChunkName: "render", webPrefetch:true*/ '../views/Extra/RenderView.vue')
  },
  
  {
    path: '/rendershow',
    name: 'rendershow',
    component: () => import(/* webpackChunkName: "rendershow", webPrefetch:true*/ '../views/Extra/RenderShowView.vue')
  },

  {
    path: '/computed',
    name: 'computed',
    component: () => import(/* webpackChunkName: "computed", webPrefetch:true*/ '../views/Extra/ComPutedView.vue')
  },

  {
    path: '/watch',
    name: 'watch',
    component: () => import(/* webpackChunkName: "watch", webPrefetch:true*/ '../views/Extra/WatchView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
