<template>
    <div :class="['loader',show ? 'loading_show':'loading_hidden']">
        <div class="loader-inner">
            <div class="loader-line-wrap">
                <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
                <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
                <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
                <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
                <div class="loader-line"></div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    //loading样式
    .loading_show{
        display: block;
    }
    .loading_hidden{
         display: none;
     }
    //核心样式
    .loader {
        position: fixed;
        overflow: hidden;
        background: #000;
        background: -webkit-radial-gradient(#222, #000);
        background: radial-gradient(#222, #000);
        opacity: 0.8;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 9999;
        .loader-inner {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            width: 100px;
            height: 60px;
            margin: auto;
            .loader-line-wrap {
                position: absolute;
                -webkit-animation: spin 2000ms cubic-bezier(.175, .885, .32, 1.275) infinite;
                animation: spin 2000ms cubic-bezier(.175, .885, .32, 1.275) infinite;
                box-sizing: border-box;
                width: 100px;
                height: 50px;
                left: 0;
                top: 0;
                overflow: hidden;
                -webkit-transform-origin: 50% 100%;
                transform-origin: 50% 100%;
                .loader-line {
                    position: absolute;
                    border: solid 4px transparent;
                    border-radius: 100%;
                    box-sizing: border-box;
                    width: 100px;
                    height: 100px;
                    left: 0;
                    right: 0;
                    top: 0;
                    margin: 0 auto;
                }
                &:nth-child(1){
                    -webkit-animation-delay: -50ms;
                    animation-delay: -50ms;
                    .loader-line {
                        border-color: hsl(0, 80%, 60%);
                        width: 90px;
                        height: 90px;
                        top: 7px;
                    }
                }
                &:nth-child(2){
                    -webkit-animation-delay: -100ms;
                    animation-delay: -100ms;
                    .loader-line {
                        border-color: hsl(60, 80%, 60%);
                        height: 76px;
                        width: 76px;
                        top: 14px;
                    }
                }
                &:nth-child(3){
                    -webkit-animation-delay: -150ms;
                    animation-delay: -150ms;
                    .loader-line {
                        border-color: hsl(120, 80%, 60%);
                        height: 62px;
                        width: 62px;
                        top: 21px;
                    }
                }
                &:nth-child(4){
                    -webkit-animation-delay: -200ms;
                    animation-delay: -200ms;
                    .loader-line {
                        border-color: hsl(180, 80%, 60%);
                        height: 48px;
                        width: 48px;
                        top: 28px;
                    }
                }
                &:nth-child(5){
                    -webkit-animation-delay: -250ms;
                    animation-delay: -250ms;
                    .loader-line {
                        border-color: hsl(240, 80%, 60%);
                        height: 34px;
                        width: 34px;
                        top: 35px;
                    }
                }
            }
        }
    }
    @-webkit-keyframes spin {
        0%, 15% {
            -webkit-transform: rotate(0);
            transform: rotate(0);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes spin {
        0%, 15% {
            -webkit-transform: rotate(0);
            transform: rotate(0);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
</style>
<script>
    /*
        time : 2017-3-9
        author : zhengdifei
        desc : 定义loading组件
        data : {
            show : 是否显示loading
        }
    */
    import { mapState } from 'vuex'

    export default{
        computed : mapState({
            show : state => state.loading.show
        })
    }
</script>
