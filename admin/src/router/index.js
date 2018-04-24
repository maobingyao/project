import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Login from '@/components/login'
import Index from '@/components/index'
import sub1 from '@/components/sub1'

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
      children:[{
          path: 'sub1',
          name:'sub1',
          component: sub1
      }],
      props: true,
      component:Index
    }
  ]
})
