<template>
    <div>
        <h2>示例 1</h2>
        <div :class="{'changeColor':changeColor}">
            <span>示例1内容</span>
        </div>

        <h2>示例 2</h2>
        <button @click="changeColor =! changeColor">change color</button>
        <button @click="changeLength =! changeLength">change length</button>
        <div :class="compClasses">
            <span>示例2内容</span>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'class-style',

        data() {
            return {
                changeColor: false,
                changeLength: false
            }
        },

        computed: {
            compClasses() {
                return {
                    changeColor: this.changeColor,
                    changeLength: this.changeLength
                }
            }
        }
    };
</script>

<style scoped>
    span {
        background-color: #FF0000;
        display: inline-block;
        padding: 10px;
        color: #FFFFFF;
        margin: 10px 0;
    }

    .changeColor span {
        color: #FFFF00;
    }

    .changeLength span:after {
        content: "length";
        margin-left: 10px;
    }
</style>
