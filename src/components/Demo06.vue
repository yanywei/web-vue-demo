<!-- Home.vue -->
<template>
    <!-- 所有的内容要被根节点包含起来 -->
    <div class="demo06" id="home">
        <h1>{{ msg }}</h1>

        <h2>这是一个首页组件 -- {{message }}</h2>
        <button @click="run()">执行run方法</button>
        <v-home msg="引入Home组件"/>
    </div>
</template>

<script>
    import Home from "@/components/Home";
    // import Home from "./components/Home.vue";
    export default {
        name: "Demo06",
        components: {
            'v-home': Home
        },
        props: {
            msg: String
        },
        data () { /* 业务逻辑里面定义的数据*/
            return {
                message: '这是一个首页组件'
            }
        },
        methods: {
            run() {
                alert(this.message);
            }
        }
    }
</script>

<!-- <style lang="scss"> --><!-- scss需要安装 -->
<style scoped>
    /* css 局部作用域 scoped */
    h2 {
        color: red;
    }
</style>