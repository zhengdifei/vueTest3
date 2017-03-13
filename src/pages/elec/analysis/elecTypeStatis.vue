<template>
    <v-widget>
        <span slot="title">分类用能统计</span>
        <span slot="content">分类统计</span>
    </v-widget>
</template>
<style lang="scss">

</style>
<script>
    import widget from 'components/widget.vue'

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components : {
            'v-widget' : widget
        }
    }
</script>