<template>
  <!-- vue的模板里面 所有的内容要被一个根节点包含起来 -->
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div v-bind:class="{'red': flag, 'blue': !flag}">
      <h1>{{msg}} 欢迎来到Vue应用开发首页</h1>
    </div><hr>
    <h2>{{msg }}这是一个根组件</h2>
    <hello msg="Welcome to Your Vue.js App"/><hr>
    <Demo00 msg="Demo00 - 获取定义的数据"/><hr>
    <Demo01 msg="Demo01 - 绑定属性值"/><hr>
    <Demo02 msg="Demo02 - 双向数据绑定"/><hr>
    <Demo03 msg="Demo03 - 定义执行方法，数据获取改变，事件对象"/><hr>
    <Demo04 msg="Demo04 - Vue-toDoList录制"/><hr>
    <Demo05 msg="Demo05 - Vue-toDoList录制--处理缓存数据(storage.js)"/><hr>
    <Demo06 msg="Demo06 - Vue组件及生命周期函数"/><hr>
    <Demo07 v-if="flag" msg="Demo07 - 生命周期函数"/><br>
    <button @click="flag = !flag">挂载以及卸载demo07组件</button><hr>
    <Demo08 msg="Demo08 - 使用Vue插件请求数据"/><hr>
    <Demo09 msg="Demo09 - 父子组件传值及父子间主动获取数据和方法"/><hr>
    <Demo10 msg="Demo10 - 非父子组件传值(与Demo09) - VueEvent.js"/><hr>
    <Demo11 msg="Demo11 - 配置Vue路由步骤(与Demo10)及get传值(与Content)"/>
    <!-- 路由出口，路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <!-- 使用 router-link 组件来导航，通过传入'to'属性指定链接 -->
    <header class="header">
      <router-link to="/demo10">Demo10</router-link>
      <router-link to="/demo11">Demo11</router-link><hr>
    </header>
  </div>
</template>

<script>
  // 1、引入组件
  // 2、挂载组件
  // 3、在模板中使用
  /*
   * 生命周期函数/生命周期钩子：组件挂载、组件更新、组件销毁的时候触发的一系列的方法，这些方法就叫做生命周期函数
   */
  import HelloWorld from './components/HelloWorld.vue'
  import Demo00 from './components/Demo00.vue'
  import Demo01 from './components/Demo01.vue'
  import Demo02 from './components/Demo02.vue'
  import Demo03 from './components/Demo03.vue'
  import Demo04 from './components/Demo04.vue'
  import Demo05 from './components/Demo05.vue'
  import Demo06 from './components/Demo06.vue'
  import Demo07 from './components/Demo07.vue'
  import Demo08 from './components/Demo08.vue'
  import Demo09 from './components/Demo09.vue'
  import Demo10 from './components/Demo10.vue'
  import Demo11 from './components/Demo11.vue'

  export default {
    name: 'App',
    components: { /* 前面的组件名称不能和html标签一样 */
      'hello': HelloWorld,
      Demo00,
      Demo01,
      Demo02,
      Demo03,
      Demo04,
      Demo05,
      Demo06,
      Demo07,
      Demo08,
      Demo09,
      Demo10,
      Demo11
    },
    data () { /* 业务逻辑里面定义的数据*/
      return {
        msg: '您好，',
        flag: 'true'
      }
    },
    mounted() {
      console.log('我是一个生命周期函数');
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .red {
    color: red;
  }
  .blue {
    color: blue;
  }
</style>
