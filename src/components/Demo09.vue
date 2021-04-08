<template>
    <div class="demo09">
        <h1>{{ msg }}</h1>

        <h2>header的父类组件</h2>
        <!-- 一、父组件给子组件传值 -->
        <!-- <v-header :title="message" :running="run" :demo="this"></v-header> -->

        <!-- 二、父组件主动获取子组件的数据和方法 -->
        <v-head ref="header"></v-head><br>
        <button @click="getChildData()">主动获取子组件的数据和方法</button>

        <br>
        <br>
        <br>
        <button @click="emitEvent()">给Demo10组件广播数据</button>
    </div>
</template>

<script>
    /*
     * 一、父组件给子组件传值
     *     1、父组件调用子组件的时候  绑定动态属性  <v-header :title="message"></v-header>
     *     2、在子组件里面通过props接收父组件传过来的数据
     *         props: {
     *             msg: String,
     *             title: String,
     *             running: null,
     *             demo: null
     *         }
     *         或者：
     *         props: ['msg', 'title', 'running', 'demo']
     *     3、直接在子组件里面使用
     * 二、父组件主动获取子组件的数据和方法
     *     1、调用子组件的时候定义一个ref  <v-header ref="header"></v-header>
     *     2、在父组件里面通过  this.$refs.header.属性  this.$refs.header.方法
     *
     * 三、子组件主动获取父组件的数据和方法
     *    this.$parent.属性  this.$parent.方法
     */
    import Header from './Header.vue'

    // 引入 vue实例
    // import VueEvent from "@/model/VueEvent";
    import VueEvent from "../model/VueEvent.js";

    export default {
        name: "Demo09",
        props: {
            msg: String
        },
        components: {
            /* 'v-header': Header */
            'v-head': Header
        },
        data () { /* 业务逻辑里面定义的数据*/
            return {
                message: 'Header的父组件',
                new: '我是广播数据者Demo09'
            }
        },
        methods: {
            run(data) {
                alert('我是父组件的Run方法 ' + data);
            },
            getChildData() {
                // alert(this.$refs.header.message);
                this.$refs.header.run();
            },
            emitEvent() {
                // 广播数据
                VueEvent.$emit('to-new', this.new);
            }
        },
        mounted() {
            VueEvent.$on('to-news', function (data) {
                console.log(data);
            });
        }
    }
</script>

<style scoped>

</style>