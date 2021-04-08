<template>
    <div class="demo08">
        <h1>{{ msg }}</h1>

        <button @click="getVueData()">使用vue-resource请求数据</button>
        <br>
        <ul>
            <li v-for="(item, key) in listvue" :key="item.title">
                {{key }} - {{item.title }}
            </li>
        </ul>
        <br>
        <button @click="getAxiosData()">使用axios请求数据</button>
        <br>
        <ul>
            <li v-for="(item, key) in listaxios" :key="item.title">
                {{key }} - {{item.title }}
            </li>
        </ul>
    </div>
</template>

<script>
    /*
     * 请求数据模板
     * vue-resource 官方提供的vue的一个插件
     *     引入插件步骤：项目路径下执行  npm[cnpm] install vue-resource --save (保存到package.json)
     *     在main.js里面引入插件vue-resource
     * axios
     *     引入插件步骤：1、安装-项目路径下执行  npm[cnpm] install axios --save (保存到package.json)
     *     2、哪里用哪里引入axios  import Axios from 'axios';
     * fetch-jsonp
     */
    import Axios from 'axios';

    export default {
        name: "Demo08",
        props: {
            msg: String
        },
        data () { /* 业务逻辑里面定义的数据*/
            return {
                listvue: [],
                listaxios: []
            }
        },
        methods: {
            getVueData() {
                // 请求数据
                var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
                // this.$http.get(api).then(function (response) {
                this.$http.get(api).then((response) => {
                    console.log(response);
                    // 注意this指向
                    this.listvue = response.body.result;
                }, function(err) {
                    console.log(err);
                });
            },
            getAxiosData() {
                // 请求数据
                var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
                Axios.get(api).then((response) => {
                    console.log(response);
                    this.listaxios = response.data.result;
                }).catch((error) => {
                    console.log(error);
                });
            }
        },
        mounted() { /* 生命周期函数 */
            this.getVueData();
            this.getAxiosData();
        }
    }
</script>

<style scoped>

</style>