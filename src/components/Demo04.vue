<template>
    <div class="demo04">
        <h1>{{ msg }}</h1>

        <input type="text" v-model="todo" v-on:keydown="doAdd($event)" />
        <!--<button @click="doAdd()">+ 增加</button>-->
        <br>
        <h2>进行中</h2>
        <ul>
            <li v-for="(item, key) in list" :key="item.title">
                <div v-if="!item.checked">
                    <input type="checkbox" v-model="item.checked"/>{{item.title }}  <button @click="removeData(key)">- 删除</button>
                </div>
            </li>
        </ul>
        <h2>已完成</h2>
        <ul class="finish">
            <li v-for="(item, key) in list" :key="item.title">
                <div v-if="item.checked">
                    <input type="checkbox" v-model="item.checked"/>{{item.title }}  <button @click="removeData(key)">- 删除</button>
                </div>
            </li>
        </ul>
        <h2 v-if="ok">这是一个Ok</h2>
        <br>
        <h2 v-if="!ok">这是一个No</h2>
        <button @click="getList()">获取list的值</button>
    </div>
</template>

<script>
    export default {
        name: "Demo04",
        props: {
            msg: String
        },
        data () { /* 业务逻辑里面定义的数据*/
            return {
                ok: true,
                todo: '',
                list: [
                    {
                        title: '录制node.js',
                        checked: true
                    },
                    {
                        title: '录制ionic',
                        checked: false
                    }
                ]
            }
        },
        methods: {
            doAdd(e) {
                //alert('增加');
                // 1、获取文本框输入的值  2、把文本框的值push到list里面
                // this.list.push(this.todo);
                console.log(e.keyCode);
                if (e.keyCode == 13) {
                    this.list.push({
                        title: this.todo,
                        checked: false
                    });
                    this.todo = '';
                }
            },
            removeData(key) {
                // alert(key);
                // splice js操作数组的方法
                this.list.splice(key, 1);
            },
            getList() {
                console.log(this.list);
            }
        }
    }
</script>

<style scoped>
    .finish li {
        /* background: red; */
        background: #eee;
    }
</style>