<template>
    <div class="demo10">
        <h1>{{ msg }}</h1>

        <button @click="emitEvent()">给Demo09组件广播数据</button>
    </div>
</template>

<script>
    /*
     * 非父子组件传值
     *     1、新疆一个js文件  然后引入vue  实例化vue  最后暴露这个实例
     *     2、在要广播的地方引入刚才定义的实例
     *     3、通过  VueEvent.$emit('名称', '数据');
     *     4、在接收数据的地方通过 $接收广播的数据
     *         VueEvent.$on('to-new', function (data) {
     *             console.log(data);
     *         });
     */

    // 引入 vue实例
    // import VueEvent from "@/model/VueEvent";
    import VueEvent from "../model/VueEvent.js";

    export default {
        name: "Demo10",
        props: {
            msg: String
        },
        data () { /* 业务逻辑里面定义的数据*/
            return {
                news: '我是广播数据者Demo10'
            }
        },
        methods: {
            emitEvent() {
                // 广播数据
                VueEvent.$emit('to-news', this.news);
            }
        },
        mounted() {
            VueEvent.$on('to-new', function (data) {
                console.log(data);
            });
        }
    }
</script>

<style scoped>

</style>