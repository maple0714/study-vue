<template>
    <div style="width: 700px;margin: 0 auto;">
        <div>我是{{name}}，年龄{{age}}</div>
        <button @click="subtract(1)">减一岁</button>
        <button @click="add(1)">加一岁</button>
        <button @click="subtract(10)">减十岁</button>
        <button @click="add(10)">加十岁</button>
        <div id="canvas" @mousemove="updateXY" class="canvas">
            {{x}},{{y}}
            <span @mousemove.stop>StopMoving</span>
        </div>


        <div class="global-module">
            <h3 class="global-module-title">双向绑定</h3>
            <div class="global-module-content">
                <input type="text" v-model="age" placeholder="请输入年龄" />
                <div>年龄：{{age}}</div>
            </div>
        </div>

        <div class="global-module">
            <h3 class="global-module-title">Computed计算属性</h3>
            <div class="global-module-content">
                <button @click="computedA++">Add to A</button>
                <button @click="computedB++">Add to B</button>
                <div>A：{{computedA}}</div>
                <div>B：{{computedB}}</div>
                <div>C + A = {{addToA}}</div>
                <div>C + B = {{addToB}}</div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "hello-world",

        data() {
            return {
                name: 'Sev7en',
                age: 18,
                x: 0,
                y: 0
            }
        },

        computed: {
            addToA() {
                return this.computedA + this.computedC;
            },
            addToB() {
                return this.computedB + this.computedC;
            }
        },

        methods: {
            subtract(inc) {
                this.age -= inc;
            },
            add(dec) {
                this.age += dec;
            },
            updateXY(event) {
                this.x = event.offsetX;
                this.y = event.offsetY;
            },
            enterSubmit() {
                alert("提交成功。");
            },
            keySubmit() {
                alert("提交成功。");
            }
            // addToA() {
            //     return this.computedA + this.computedC;
            // },
            // addToB() {
            //     return this.computedB + this.computedC;
            // }
        }
    }
</script>

<style scoped>
    .canvas {
        width: 400px;
        height: 200px;
        margin: 0 auto;
        line-height: 200px;
        border: 1px solid #cccccc;
    }
</style>