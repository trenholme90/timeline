import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: HelloWorld
    }
  ]
})
