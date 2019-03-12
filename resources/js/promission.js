import router from './router/router.js'
import { getMenu } from './api/login'

const _import = require('./router/_import_deve.js')

var getRouter

router.beforeEach((to, from, next) => {
	if (!getRouter) {
		if (!getObjArr('router')) {
			getMenu({}).then(res => {

				getRouter = res.router
				console.log(getRouter);
				return false;
				saveObjArr('router', getRouter);
				routerGo(to, next);
			})
		} else {
			getRouter = getObjArr('router');
			routerGo(to, next);
		}
	} else {
		next()
	}
})


function routerGo(to, next) {
  getRouter = filterAsyncRouter(getRouter) //过滤路由
  router.addRoutes(getRouter) //动态添加路由
  global.antRouter = getRouter //将路由数据传递给全局变量，做侧边栏菜单渲染工作
  next({ ...to, replace: true })
}

function saveObjArr(name, data) { //localStorage 存储数组对象的方法
  localStorage.setItem(name, JSON.stringify(data))
}

function getObjArr(name) { //localStorage 获取数组对象的方法
  return JSON.parse(window.localStorage.getItem(name));

}

function filterAsyncRouter(asyncRouterMap) { //遍历后台传来的路由字符串，转换为组件对象
  const accessedRouters = asyncRouterMap.filter(route => {
    if (route.component) {
      if (route.component === 'Layout') {//Layout组件特殊处理
        route.component = Layout
      } else {
        route.component = _import(route.component)
      }
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })

  return accessedRouters
}
