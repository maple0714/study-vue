<template>
    <div id="app" class="global-layout-main">
        <div class="global-layout-left">
            <template v-for="row in linkList">
                <router-link :to="{ path: row.linkText}" :key='row.linkText'>{{row.label}}</router-link>
            </template>
        </div>
        <div class="global-layout-right">
            <router-view/>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                linkList: [{
                    linkText: '/',
                    label: '首页'
                }, {
                    linkText: '/eventModifier',
                    label: '事件修饰符'
                }, {
                    linkText: '/keyModifier',
                    label: '按键修饰符'
                }, {
                    linkText: '/computed',
                    label: 'Computed计算属性'
                }, {
                    linkText: '/classStyle',
                    label: 'Class与Style绑定'
                }, {
                    linkText: '/condition',
                    label: '条件渲染'
                }]
            }
        }
    }
</script>
<style lang="less" type="text/less">
    @import "theme-chalk/index.less";
</style>
