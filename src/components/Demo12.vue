<template>
    <div class="demo12">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: "Demo12",
        props: {
            msg: String
        },
        data () { /* 业务逻辑里面定义的数据*/
            return {

            }
        }
    }
</script>

<style scoped>

</style>