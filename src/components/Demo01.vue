<template>
    <div class="demo01">
        <h1>{{ msg }}</h1>

        <!-- -------- Start -------- -->
        <div v-bind:title="title">
            鼠标瞄上去看一下
        </div>
        <br>
        <img src="https://img.alicdn.com/tfs/TB1Ly5oS3HqK1RjSZFPXXcwapXa-238-54.png"/>
        <br>
        <!-- 绑定属性 -->
        <img v-bind:src="url"/>
        <br>
        <img :src="url"/>
        <br>
        <!-- 绑定html -->
        <div v-html="h">

        </div>
        <br>
        <!-- 绑定数据的另一种方法 -->
        <div v-text="text">

        </div>
        <br>
        <!-- 循环数据 第一个数据高亮 -->
        <ul>
            <li v-for="(item, key) in list" :key="item">
                {{key }} - {{item }}
            </li>
        </ul>
        <br>
        <ul>
            <li v-for="(item, key) in list" :key="item" :class="{'red': key == 0, 'blue': key == 1}">
                {{key }} - {{item }}
            </li>
        </ul>
        <br>
        <!-- v-bind:class :class的使用 -->
        <div v-bind:class="{'red': flag}">
            我是一个Div
        </div>
        <br>
        <div v-bind:class="{'red': flag, 'blue': !flag}">
            我是另一个Div
        </div>
        <br>
        <!-- v-bind:style :style的使用 -->  <!-- {'width':boxwidth} -->
        <div class="box" v-bind:style="{width: boxwidth + 'px'}">
            我是另一个Div
        </div>
        <!-- --------- End --------- -->
    </div>
</template>

<script>
    export default {
        name: "Demo01",
        props: {
            msg: String
        },
        data () { /* 业务逻辑里面定义的数据 */
            return {
                text: '你好，Vue',
                title: '我是一个title',
                url: 'https://img.alicdn.com/tfs/TB1Ly5oS3HqK1RjSZFPXXcwapXa-238-54.png',
                h: '<h2>我是h2</h2>',
                list: ['1', '2', '3'],
                flag: false,
                boxwidth: 500 // '500px'
            }
        }
    }
</script>

<style scoped>
    .red {
        color: red;
    }
    .blue {
        color: blue;
    }
    .box {
        height: 100px;
        width: 100px;
        background: red;
    }
</style>