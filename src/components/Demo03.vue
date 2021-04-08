<template>
    <div class="demo03">
        <h1>{{ msg }}</h1>

        <!-- 绑定属性 -->
        <!--<img v-bind:src="url"/>
        <img :src="url"/>-->

        <button v-on:click="run1()">执行方法的第一种写法</button>

        <button @click="run2()">执行方法的第二种写法</button>
        <br>
        <br>
        <button @click="getMsg()">获取data里面的msg</button>
        <br>
        <br>
        <button @click="setMsg()">改变data里面的msg</button>
        <br>
        <br>
        <button @click="requestData()">请求数据</button>
        <br>
        <ul>
            <li v-for="(item, key) in list" :key="item">
                {{key }} -- {{item }}
            </li>
        </ul>
        <br>
        <button @click="deleteData('1')">执行方法传值: 1</button>
        <br>
        <br>
        <button data-aid="123" @click="eventFn($event)">事件对象</button>
    </div>
</template>

<script>
    export default {
        name: "Demo03",
        props: {
            msg: String
        },
        data () { /* 业务逻辑里面定义的数据 */
            return {
                message: '双向数据',
                list: []
            }
        },
        methods: { /* 放方法的地方 */
            run1:function() {
                alert('这是一个方法');
            },
            run2() {
                alert('这是另一个方法');
            },
            getMsg() {
                alert(this.message); // Vue
                // this.data.msg; // 微信小程序
                // this.state.msg; // react
                // this.msg; // Angular 5/Angular 6
            },
            setMsg() {
                this.message='我是改变后的数据';
            },
            requestData() {
                for (var i = 0; i < 10; i ++) {
                    this.list.push('我是第 ' + i + ' 条数据');
                }
            },
            deleteData(val) {
                alert(val);
            },
            eventFn(e) {
                console.log(e);
                // e.srcElement // dom节点
                e.srcElement.style.background='red';

                console.log(e.srcElement.dataset.aid); // 获取自定义属性的值
            }
        }
    }
</script>

<style scoped>

</style>