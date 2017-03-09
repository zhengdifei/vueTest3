/**
 * time : 2017/1/1 0001.
 * desc : webpack打包的入口文件
 */
import Vue from 'vue'
import App from './app.vue'
import store from 'store'
import router from 'router'
import ajax from 'ajax'

new Vue({
    el : "#app",
    store,
    router,
    template : "<App/>",
    components : { App }
})