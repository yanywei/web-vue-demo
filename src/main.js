import Vue from 'vue'
import App from './App.vue'

// 引入公共的scss  注意：创建项目的时候必须用scss
// import './assets/css/baisc.scss';

/*
 * 使用vue-resource请求数据的步骤
 * 1、需要安装vue-resource模块  npm install vue-resource --save  |  cnpm install vue-resource --save
 * 2、main.js引入vue-resource  import VueResource from 'vue-resource';
 * 3、Vue.use(VueResource);
 * 4、在组件里面直接使用  this.$http.get(地址).then(function () { })
 */
import VueResource from 'vue-resource'; // 请求数据
import VueRouter from 'vue-router';

Vue.use(VueResource); // 使用插件
Vue.use(VueRouter);

// 1、创建组件
import Demo10 from './components/Demo10.vue'
import Demo11 from './components/Demo11.vue'
import Content from './components/Content.vue'
import Context from './components/Context.vue'

// 2、配置路由  注意：名字
// http://localhost:8080/#/demo11
const route = [
  { path: '/demo10', component: Demo10 },
  { path: '/demo11', component: Demo11 },
  { path: '/content/:aid', component: Content }, /* 动态路由 */
  { path: '/context', component: Context },

  { path: '*', redirect: '/demo11' }
]

// 3、实例化VueRouter  注意：名字
const router = new VueRouter({
  // routes // (缩写) 相当于 routes: routes(对应上面的值)
  routes: route
})

Vue.config.productionTip = false

// 4、挂载路由
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// 5、<router-view></router-view>放在App.vue
