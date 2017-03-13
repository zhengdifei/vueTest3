<template>
    <v-widget>
        <span slot="title">按月进行用能比较</span>
        <span slot="content">月用能比较</span>
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