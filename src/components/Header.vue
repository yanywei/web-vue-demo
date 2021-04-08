<template>
    <div class="header" id="header">
        <h1>{{ msg }}</h1>

        <!-- 一、父组件给子组件传值 -->
        <!-- <h2>这是一个头部组件 &#45;&#45; {{title }}</h2>
        <br>
        <button @click="running('您好')">执行父组件的方法</button>
        <br>
        <br>
        <button @click="getParent()">获取父组件的数据和方法</button> -->

        <h2>这是一个头部组件</h2>
        <!-- 三、子组件主动获取父组件的数据和方法 -->
        <button @click="getParentData()">主动获取父组件的数据和方法</button>

    </div>
</template>

<script>
    export default {
        name: "Header",
        /*
        一、父组件给子组件传值
        props: {
            msg: String,
            title: String,
            running: null,
            demo: null
        },*/
        props: ['msg', 'title', 'running', 'demo'],
        data () {
            return {
                message: '子组件的message'
            }
        },
        methods: {
            getParent() {
                // alert(this.title);
                // alert(this.demo.message);
                this.demo.run('子调父');
            },
            run() {
                alert('我是子组件的run方法');
            },
            getParentData() {
                // alert(this.$parent.message);
                this.$parent.run('子组件主动获取父组件方法');
            }
        }
    }
</script>

<style scoped>

</style>