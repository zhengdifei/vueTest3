/**
 * time : 2017/3/6 0006.
 * author : zhengdifei
 * desc : vue-router的加载配置
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import routerConf from 'router/router.config'

Vue.use(VueRouter)

export default new VueRouter({
    routes : routerConf
})