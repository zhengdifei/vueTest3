<template>
    <div>
        <div>this is template body,{{msg}}</div>
        <div>
            <v-widget></v-widget>
        </div>
    </div>
</template>
<script>
    /*
        time : 2017-3-9
        author : zhengdifei
        desc : 首页
    */
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
