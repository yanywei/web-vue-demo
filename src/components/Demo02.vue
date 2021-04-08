<template>
    <div class="demo02">
        <h1>{{ msg }}</h1>

        <h1>{{context }}</h1>
        <input type="text" v-model="context" />
        <!-- @click="getMsg()" -->
        <button v-on:click="getMsg()">获取表单里面的数据get</button>
        <button v-on:click="setMsg()">设置表单里面的数据set</button>
        <br>
        <br>
        <input type="text" ref="userinfo" />
        <br>
        <div ref="box">我是一个box</div>
        <button v-on:click="getInputValue()">获取第二个表单里面的数据</button>
    </div>
</template>

<script>
    /*
     * 双向数据绑定 MVVM vue就是一个MVVM框架
     * M model
     * V view
     * MVVM model改变会影响视图view  view视图改变反过来影响model
     * 双向数据绑定必须在表单里面使用
     */
    export default {
        name: "Demo02",
        props: {
            msg: String
        },
        data () { /* 业务逻辑里面定义的数据 */
            return {
                context: '双向数据'
            }
        },
        methods: { /* 放方法的地方 */
            getMsg() {
                // alert("vue方法执行了");
                // 方法里面获取data里面的数据
                alert(this.context);
            },
            setMsg() {
                this.context='我是改变后的数据';
            },
            getInputValue() {
                // 获取ref定义的dom节点
                console.log(this.$refs.userinfo);
                this.$refs.box.style.background="red";
                alert(this.$refs.userinfo.value);
            }
        }
    }
</script>

<style scoped>

</style>