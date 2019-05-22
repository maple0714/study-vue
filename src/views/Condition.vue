<template>
    <div>
        <div class="global-module">
            <h3 class="global-module-title">v-if</h3>
            <div class="global-module-content">
                <button @click="error =! error">Toggle Error</button>
                <button @click="success =! success">Toggle Success</button>
                <div v-if="error">网络连接错误：404</div>
                <div v-if="success">网络连接成功：200</div>
            </div>
        </div>

        <div class="global-module">
            <h3 class="global-module-title">v-show</h3>
            <div class="global-module-content">
                <button @click="error =! error">Toggle Error</button>
                <button @click="success =! success">Toggle Success</button>
                <div v-show="error">网络连接错误：404</div>
                <div v-show="success">网络连接成功：200</div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'condition',

        data() {
            return {
                error: false,
                success: false
            }
        }
    };
</script>

<style scoped>

</style>
