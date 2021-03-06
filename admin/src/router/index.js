import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Login from '@/components/login'
import Index from '@/components/index'
import projectForm from '@/components/projectForm'
import addCompany from '@/components/addCompany'
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
          path: 'projectForm',
          name:'projectForm',
          component: projectForm
      },{
        path: 'addCompany',
        name:'addCompany',
        component: addCompany
      }],
      props: true,
      component:Index
    }
  ]
})
