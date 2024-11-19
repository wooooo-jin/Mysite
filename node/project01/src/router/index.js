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
    path: '/watch',
    name: 'watch',
    component: () => import(/* webpackChunkName: "watch", webPrefetch:true*/ '../views/Extra/WatchView.vue')
  },

  {
    path: '/lifecyclehook',
    name: 'lifecyclehook',
    component: () => import(/* webpackChunkName: "lifecyclehook", webPrefetch:true*/ '../views/Extra/LifeCycleHookView.vue')
  },

  {
    path: '/pagetitle',
    name: 'pagetitle',
    component: () => import(/* webpackChunkName: "pagetitle", webPrefetch:true*/ '../views/reuse/PageView.vue')
  },

  {
    path: '/parents',
    name: 'parents',
    component: () => import(/* webpackChunkName: "parents", webPrefetch:true*/ '../views/reuse/ParentsView.vue')
  },

  {
    path: '/grid',
    name: 'grid',
    component: () => import(/* webpackChunkName: "grid", webPrefetch:true*/ '../views/reuse/TableView.vue')
  },

  {
    path: '/testgrid',
    name: 'testgrid',
    component: () => import(/* webpackChunkName: "testgrid", webPrefetch:true*/ '../views/reuse/TestGridView.vue')
  },

  {
    path: '/SlotModal',
    name: 'SlotModal',
    component: () => import(/* webpackChunkName: "SlotModal", webPrefetch:true*/ '../views/reuse/SlotModalView.vue')
  },

  {
    path: '/provide',
    name: 'provide',
    component: () => import(/* webpackChunkName: "provide", webPrefetch:true*/ '../views/reuse/RootView.vue')
  },

  {
    path: '/custom',
    name: 'custom',
    component: () => import(/* webpackChunkName: "custom", webPrefetch:true*/ '../views/advenced/CustomView.vue')
  },

  {
    path: '/mixin',
    name: 'mixin',
    component: () => import(/* webpackChunkName: "mixin", webPrefetch:true*/ '../views/advenced/MixinView.vue')
  },

  {
    path: '/plugin',
    name: 'plugin',
    component: () => import(/* webpackChunkName: "plugin", webPrefetch:true*/ '../views/advenced/pluginView.vue')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
