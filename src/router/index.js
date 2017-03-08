/**
 * Created by Administrator on 2017/3/6 0006.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import routerConf from 'router/router.config'

Vue.use(VueRouter)

export default new VueRouter({
    routes : routerConf
})