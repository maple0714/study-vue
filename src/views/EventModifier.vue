<template>
<div>
    <div class="global-module">
        <h3 class="global-module-title">.stop</h3>
        <div class="global-module-content">
            <div @click="outer" class="outer">
                <div @click.stop="inner" class="inner">点我</div>
                <div>{{message}}</div>
            </div>
        </div>
    </div>

    <div class="global-module">
        <h3 class="global-module-title">.self</h3>
        <div class="global-module-content">
            <div @click.self="outer" class="outer">
                <div @click.self="inner" class="inner">点我</div>
                <div>{{message}}</div>
            </div>
        </div>
    </div>

    <div class="global-module">
        <h3 class="global-module-title">.capture</h3>
        <div class="global-module-content">
            <div class="outer" @click.capture="outer">
                <div class="inner" @click.capture="middle">
                    <button @click.capture="inner">点我</button>
                </div>
            </div>
        </div>
    </div>

    <div class="global-module">
        <h3 class="global-module-title">.prevent</h3>
        <div class="global-module-content">
            <a href="http://www.baidu.com" @click.prevent="noLink">点击我（prevent）</a>
        </div>
    </div>

    <div class="global-module">
        <h3 class="global-module-title">.once</h3>
        <div class="global-module-content">
            <button @click.once="once">点击我</button>
            <div>{{num}}</div>
        </div>
    </div>
</div>
</template>

<script>

    export default {
        name: 'event-modifier',

        data() {
            return {
                message: '',
                num: 0
            }
        },

        methods: {
            outer() {
                alert('outer：这是外面的Div');
                this.message = 'outer：这是外面的Div';
            },
            middle() {
                alert('middle：这是中间的Div');
                this.message = 'middle：这是中间的Div';
            },
            inner() {
                alert('inner：这是里面的Div');
                this.message = 'inner：这是里面的Div';
            },
            noLink() {
                alert("此处禁止跳转");
            },
            once() {
                this.num++;
            }
        }
    };
</script>

<style scoped>
    .outer {
        padding: 15px;
        width: 370px;
        height: 130px;
        background-color: #cccccc;
    }

    .inner {
        width: 370px;
        height: 100px;
        background-color: #eeeeee;
    }
</style>
