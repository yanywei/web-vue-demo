<template>
    <div class="demo07" id="life">
        <h1>{{ msg }}</h1>

        <h2>生命周期函数的演示 -- {{message }}</h2>
        <button @click="setMsg()">执行方法改变message</button>
    </div>
</template>

<script>
    /*
     * 生命周期函数/生命周期钩子：组件挂载、组件更新、组件销毁的时候触发的一系列的方法，这些方法就叫做生命周期函数
     */
    export default {
        name: "Demo07",
        props: {
            msg: String
        },
        data () { /* 业务逻辑里面定义的数据*/
            return {
                message: '我是一个生命周期函数的组件'
            }
        },
        methods: {
            setMsg() {
                this.message = '我是改变后的数据'
            }
        },
        beforeCreate() {
            console.log('实例刚刚被创建');
        },
        created() {
            console.log('实例已经创建完成');
        },
        beforeMount() {
            console.log('模板编译之前');
        },
        mounted() { /* 请求数据放在这个里面  必须记住  mounted */
            console.log('模板编译完成');
        },
        beforeUpdate() {
            console.log('数据更新之前');
        },
        updated() {
            console.log('数据更新完成');
        },
        beforeDestroy() { /* 页面销毁的时候要保存一些数据，就可以监听这个销毁的生命周期函数 */
            console.log('实例销毁之前');
        },
        destroyed() {
            console.log('实例销毁完成');
        }
    }
</script>

<style scoped>

</style>