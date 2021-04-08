<template>
    <div class="demo11">
        <h1>{{ msg }}</h1>

        <h2>路由配置步骤详解</h2>

        <!-- 获取动态路由传值 -->
        <ul>
            <li v-for="(item, key) in list" :key="item">
                <!-- http://localhost:8080/#/content/345 -->
                <!-- <router-link to="/content">{{key }} - {{item }}</router-link> -->
                <router-link :to="'/content/' + key">{{key }} - {{item }}</router-link>
            </li>
        </ul>

        <br>
        <!-- get传值 -->
        <ul>
            <li v-for="(item, key) in lists" :key="item">
                <!-- <router-link to="/context?aid=123">{{key }} - {{item }}</router-link> -->
                <router-link :to="'/context?id=' + key">{{key }} - {{item }}</router-link>
            </li>
        </ul>

        <br>
        <!-- vue结合路由请求数据 -->
        <ul>
            <li v-for="(item, key) in liste" :key="item.title">
                <router-link :to="'/content/' + key">{{key }} - {{item.title }}</router-link>
                <!--<router-link :to="'/content/' + item.aid">{{key }} - {{item.title }}</router-link>-->
            </li>
        </ul>
    </div>
</template>

<script>
    /*
     * vue路由配置
     *     1、安装  npm install vue-router --save  |  cnpm install vue-router --save
     *     2、引入并Vue.user(VueRouter)  (main.js)
     *         import VueRouter from 'vue-router';
     *         Vue.use(VueRouter);
     *     3、配置路由
     *         (1)、创建组件  引入组件
     *         (2)、定义路由  (建议复制)
     *             const routes = [
     *                 { path: '/foo', component: Foo },
     *                 { path: '/bar', component: Bar },
     *                 { path: '*', redirect: '/b' }  默认跳转路由
     *             ]
     *         (3)、实例化VueRouter
     *             const router = new VueRouter({
     *                 routes // (缩写) 相当于 routes: routes(对应上面的值)
     *             })
     *         (4)、挂载路由
     *             const app = new Vue({
     *                 router
     *             }).$mount('#app')
     *
     *             new Vue({
     *                 e1: '#app',
     *                 router,
     *                 render: h => h(App)
     *             })
     *         (5)、根组件的模板里面放上这句话 <router-view></router-view>
     */
    /*
     * 1、不同路由传值：动态路由
     *     (1)、配置动态路由
     *         // 动态路径参数  以冒号开头
     *         { path: '/content/:aid', component: Content },
     *     (2)、在对应的页面  this.$route.params 获取动态路由的值
     *
     */
    export default {
        name: "Demo11",
        props: {
            msg: String
        },
        data () { /* 业务逻辑里面定义的数据 */
            return {
                list: ['1', '2', '3'],
                lists: ['商品1', '商品2', '商品3'],
                liste: []
            }
        },
        methods: {
            requestData() {
                // jsonp请求的话  后台api接口要支持jsonp
                var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
                this.$http.get(api).then((response) => {
                    console.log(response);
                    // 注意：用到this要注意this指向
                    this.liste = response.body.result;
                }, function (err) {
                    console.log(err);
                });
            }
        },
        mounted() {
            this.requestData();
        }
    }
</script>

<style scoped>

</style>