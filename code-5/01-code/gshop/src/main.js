// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 注册路由器
import router from './router'
//定义一个全局组件
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'
//引入store
import store from './store'
//引入validate.js文件
import './validate.js'
// 引入Mock.js文件
import './mock/mock-server.js'
// 引入mint-ui 使用按钮
import { Button } from 'mint-ui';
// 引入CartControl组件
import CartControl from './components/CartControl/CartControl.vue'
// 过滤器
import './filter'



// 图片懒加载
import VueLazyload from 'vue-lazyload'
import loading from './common/images/loading.gif'

//把store对象进行挂载
Vue.store=store
Vue.prototype.$bus = new Vue()
Vue.component(Button.name, Button);
Vue.component('Header',Header)
Vue.component('Star',Star)
Vue.component('CartControl',CartControl)


Vue.use(VueLazyload, {
  loading
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
