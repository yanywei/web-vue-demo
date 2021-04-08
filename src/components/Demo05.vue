<template>
    <div class="demo05">
        <h1>{{ msg }}</h1>

        <input type="text" v-model="todo" @keydown="doAdd($event)" />
        <br>
        <h2>进行中</h2>
        <ul>
            <li v-for="(item, key) in list" :key="item.title">
                <div v-if="!item.checked">
                    <input type="checkbox" v-model="item.checked" @change="saveList()"/>{{item.title }}<button v-on:click="removeData(key)">- 删除</button>
                </div>
            </li>
        </ul>
        <br>
        <h2>已完成</h2>
        <ul>
            <li v-for="(item, key) in list" :key="item.title">
                <div v-if="item.checked">
                    <input type="checkbox" v-model="item.checked" @change="saveList()"/>{{item.title }}<button v-on:click="removeData(key)">- 删除</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import storage from "@/model/storage";
    // import storage from '../model/storage.js';
    // console.log(storage);

    export default {
        name: "Demo05",
        props: {
            msg: String
        },
        data () { /* 业务逻辑里面定义的数据*/
            return {
                ok: 'false',
                todo: '',
                list: []
            }
        },
        methods: {
            doAdd(e) {
                // console.log(e);
                // console.log(e.keyCode);
                if (e.keyCode == 13) {
                    this.list.push({
                        title: this.todo,
                        checked: false
                    });
                }
                // 保存缓存数据
                // localStorage.setItem('list', JSON.stringify(this.list));
                // eslint-disable-next-line no-undef
                storage.set('list', this.list);
            },
            removeData(key) {
                this.list.splice(key, 1);
                // localStorage.setItem('list', JSON.stringify(this.list));
                storage.set('list', this.list);
            },
            saveList() {
                // localStorage.setItem('list', JSON.stringify(this.list));
                storage.set('list', this.list);
            }
        },
        mounted() { /* 生命周期函数  vue页面刷新就会触发的方法 */
            var lists = storage.get('list');
            if (lists){ /* 注意 */
                this.list = lists;
            }
        }
    }
</script>

<style scoped>

</style>