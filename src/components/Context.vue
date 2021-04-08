<template>
    <div class="context">
        <h1>商品详情</h1>
    </div>
</template>

<script>
    export default {
        name: "Demo12",
        props: {
        },
        data () { /* 业务逻辑里面定义的数据*/
            return {
                msg: '数据'
            }
        },
        mounted() {
            // get传值
            console.log(this.$route.query);
        }
    }
</script>

<style scoped>

</style>