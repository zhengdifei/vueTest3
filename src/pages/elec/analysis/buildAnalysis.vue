<template>
    <v-widget>
        <span slot="title">楼宇用电分析</span>
        <span slot="content">楼用电分析</span>
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