/**
 * time : 2017/3/7 0007.
 * author : zhengdifei
 * desc : vuxe引导页面
 * modules : {
 *      header : 头部状态
 *      loading : 加载状态
 *      building : 建筑物模块状态
 * }
 */
import Vue from 'vue'
import Vuex from 'vuex'
import header from 'components/header/header.store'
import loading from 'components/loading.store'
import building from 'pages/Building.store'
import buildStatis from 'pages/elec/analysis/buildStatis.store'

Vue.use(Vuex)

export default new Vuex.Store({
    modules : {
        header : header,
        loading : loading,
        building : building,
        buildStatis : buildStatis
    }
})