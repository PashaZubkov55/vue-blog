import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: ()=> import('../views/Login.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    meta: {layout: 'empty'},
    component: ()=> import('../views/Registration.vue')
  },
  {
    path: '/',
    name: 'home',
    meta:{layout: 'main'},
    component: ()=> import('../views/Home.vue')
  },
  {
    path:'/profile',
    name: 'profile',
    meta: {layout: 'main'},
    component: ()=> import('../views/Profile.vue')
  },
  {
    path:'/newArticle/:name',
    props: true,
    name: 'newArticle',
    meta: {layout: 'main'},
    component: ()=> import('../views/NewArticle.vue')

  },
  {
    path:'/article/:id',
    props: true,
    name: 'article',
    meta: {layout: 'main'},
    component: ()=> import('../views/Article.vue')

  },
  {
    path: '/apdateArticle/:id/:author/:title/:text',
    props: true,
    name: 'apdateArticle',
    meta: {layout: 'main'},
    component: ()=> import('../views/ApdateArticle.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
