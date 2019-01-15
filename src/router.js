import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'
import Post from './views/Post.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list/:name',
      name: 'list',
      component: List,
      props: true
    },
    {
      path: '/post/:name/:id',
      name: 'post',
      component: Post,
      props: true
    }
  ]
})
