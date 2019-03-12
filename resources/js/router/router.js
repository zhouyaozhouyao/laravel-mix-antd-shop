import Vue from 'vue'
import Router from 'vue-router'

import Login from '../pages/login/Login'
import Dashboard from '../pages/dashboard/Analysis'
import MenuView from '../layouts/MenuView'
import RouteView from '../layouts/RouteView'

Vue.use(Router);

// 通用路由
export const constantRouterMap = [
  { path: '/login', name: '登录页', component: Login, invisible: true },
];

// 异步挂载的路由
export const asyncRouterMap = [
  {
    path: '/',
    name: '首页',
    component: MenuView,
    redirect: '/login',
    icon: 'none',
    invisible: true,
    children: [
      {
        path: '/dashboard',
        name: '首页222',
        component: RouteView,
        icon: 'dashboard',
        children: [
          {
            path: '/dashboard/analysis',
            name: '分析页222',
            component: Dashboard,
            icon: 'none'
          },{
            path: '/dashboard/test',
            name: '测试路由一22',
            component: MenuView,
            icon: 'none'
          }
        ]
      }
    ]
  },
  { path: '*', redirect: '/404', invisible: false }
];

// 实例化通用路由
export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});
/*
export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录页',
      component: Login,
      invisible: true
    },
    {
      path: '/',
      name: '首页',
      component: MenuView,
      redirect: '/login',
      icon: 'none',
      invisible: true,
      children: [
        {
          path: '/dashboard',
          name: '首页',
          component: RouteView,
          icon: 'dashboard',
          children: [
            {
              path: '/dashboard/analysis',
              name: '分析页',
              component: Dashboard,
              icon: 'none'
            },{
              path: '/dashboard/test',
              name: '测试路由一',
              component: MenuView,
              icon: 'none'
            }
          ]
        }
      ]
    }
  ]
})
*/