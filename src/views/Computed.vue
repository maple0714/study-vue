<template>
<div>
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
        name: 'computed',

        data() {
            return {
                computedA: 0,
                computedB: 0,
                computedC: 20
            }
        },

        computed: {
            addToA() {
                return this.computedA + this.computedC;
            },
            addToB() {
                return this.computedB + this.computedC;
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
