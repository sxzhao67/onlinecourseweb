import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () => import("views/homepage/home")
const querycourse = () => import("views/querycourse/querycourse")
const personal = () => import("views/personal/personal")

//1.安装插件
Vue.use(VueRouter)

//2.创建路由对象
const routes = [

  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component:home
  },
  {
    path: '/querycourse',
    component:querycourse
  },
  {
    path: '/personal',
    component:personal
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
