<template>
    <div class="demo00">
        <h1>{{ msg }}</h1>

        <br>
            这是一个根组件
        <br>
        <br>
        <h3>{{obj.name }}</h3>
        <br>
        <ul>
            <li v-for="item in list"  :key="item">
                {{item }}
            </li>
        </ul>
        <br>
        <ul>
            <li v-for="item in lists" :key="item.title">
                {{item.title }}
            </li>
        </ul>
        <br>
        <ul>
            <li v-for="item in listes" :key="item.cate">
                {{item.cate }} - {{item.list }}
                <ol>
                    <li v-for="news in item.list" :key="news.title">
                        {{news.title }}
                    </li>
                </ol>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Demo00",
        props: {
            msg: String
        },
        data () { /* 业务逻辑里面定义的数据 */
            return {
                obj: {
                    name: "张三"
                },
                list: ['1', '2', '3'],
                lists: [
                    {'title': '1'},
                    {'title': '2'},
                    {'title': '3'},
                    {'title': '4'}
                ],
                listes: [
                    {
                        'cate': '国内新闻',
                        'list': [
                            {'title': '国内1'},
                            {'title': '国内2'}
                        ]
                    },
                    {
                        'cate': '国际新闻',
                        'list': [
                            {'title': '国际1'},
                            {'title': '国际2'}
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>