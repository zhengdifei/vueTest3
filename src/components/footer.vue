<template>
    <footer>
        <div class="bottom">
            <slot>{{msg}}</slot>
        </div>
    </footer>
</template>
<style lang="scss">
    .bottom {
        color: #a7daff;
        border-top: solid 2px #105b8f;
        letter-spacing: 0.5px;
        background-color: #003f70;
        width: 100%;
        height: 34px;
        text-align: center;
        font-size: 12px;
        line-height: 32px;
    }
</style>
<script>
    /*
        time : 2017-3-9
        author : zhengdifei
        desc : 尾部组件
        data : {
            msg : 显示版权信息
        }
    */
    export default{
        data(){
            return{
                msg:'版权所有2017 VIS Energy Corporation.保留一切权利 ｜ 服务条款 ｜ 隐私条款 ｜ 京ICP证备14050733号京公安网备14050733号'
            }
        }
    }
</script>
