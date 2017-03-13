<template>
    <main class="content">
        <slot>{{msg}}</slot>
    </main>
</template>
<style lang="scss">
    .content {
        background: url(images/bg.jpg);
    }
</style>
<script>
    /*
        time : 2017-3-7
        author : zhengdifei
        desc : 内容组件
        slot : 内容区slot插件
    */
    export default{
        data(){
            return{
                msg:'hello content'
            }
        }
    }
</script>
