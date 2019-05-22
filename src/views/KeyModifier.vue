<template>
<div>
    <div class="global-module">
        <h3 class="global-module-title">按键修饰符</h3>
        <div class="global-module-content">
            <input type="text" @keyup.enter="enterSubmit" placeholder="点击回车提交" />
            <input type="text" @keyup.ctrl.shift.65="keySubmit" placeholder="点击ctrl+shift+a" />
        </div>
    </div>
</div>
</template>

<script>

    export default {
        name: 'key-modifier'
    };
</script>

<style scoped>

</style>
