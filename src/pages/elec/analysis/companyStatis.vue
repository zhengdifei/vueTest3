<template>
    <v-widget>
        <span slot="title">按单位统计用电量</span>
        <span slot="content">单位统计报表</span>
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