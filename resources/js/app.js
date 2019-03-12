/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));
// const files = require.context('./', true, /\.vue$/i)

// files.keys().map(key => {
//     return Vue.component(_.last(key.split('/')).split('.')[0], files(key))
// })

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// 完整引入 Antd UI 组件库
import Antd from 'ant-design-vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
import 'ant-design-vue/dist/antd.css'
import router from './router/router'
import Viser from 'viser-vue'
import store from './store'
import promission from './promission'

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(Viser);
// Vue.use(VueRouter);






const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
