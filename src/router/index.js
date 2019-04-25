import Vue from 'vue'
import Router from 'vue-router'
import block from '@/components/block'
import SearchComment from '@/components/SearchComment'
import SearchOrder from '@/components/SearchOrder'
import SearchUserInfo from '@/components/SearchUserInfo'
import AddProduct from '@/components/AddProduct'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/block'
    },{
      path:'/block',
      component:block
    },
    {
      path:'/HelloWorld',
      component:HelloWorld
    },
    {
      path:'/AddProduct',
      component:AddProduct
    },
    {
      path:'/SearchUserInfo',
      component:SearchUserInfo
    },
    {
      path:'/SearchOrder',
      component:SearchOrder
   },
   {
    path:'/SearchComment',
    component:SearchComment
   },
  ]
})
