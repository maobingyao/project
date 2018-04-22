import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Login from '@/components/login'
import Index from '@/components/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'*',
      redirect:'/index'
    },{
      path:'/login',
      name:'login',
      component:Login
    },{
      path:'/index',
      name:'index',
      props: true,
      component:Index
    }
  ]
})
