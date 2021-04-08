<template>
    <div class="content">
        <h2>我是详情页面</h2>
        <h2>{{list.title }}</h2>
        <div v-html="list.content"></div>
    </div>
</template>

<script>
    export default {
        name: "Content",
        props: {

        },
        data () { /* 业务逻辑里面定义的数据*/
            return {
                msg: '数据',
                list: []
            }
        },
        mounted() {
            // console.log(this.$route.params); // 获取动态路由传值
            console.log(this.$route.params.aid);
            var aid = this.$route.params.aid;
            // 调用请求数据的方法
            this.requestData(aid);

        },
        methods: {
            requestData(aid) {
                // get请求如果跨域的话  后台php java 里面要允许跨域请求
                var api = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=' + aid;
                this.$http.get(api).then((response) => {
                    console.log(response);
                    this.list = response.body.result[0];
                }, (err) => {
                    console.log(err);
                });
            }

        }
    }
</script>

<style scoped>

</style>