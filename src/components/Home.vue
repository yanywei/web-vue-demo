<template>
    <div class="home" id="home">
        <h1>{{ msg }}</h1>

        <h2 class="header">这是一个Demo06引入的组件</h2>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        <h2>{{message }}</h2>
    </div>
</template>

<script>
    export default {
        name: "Home",
        props: {
            msg: String
        },
        data () {
            return {
                message: '这是一个Demo06引入的组件'
            }
        }
    }
</script>

<style scoped>
    .header {
        background: red;
        color: #42b983;
    }
</style>