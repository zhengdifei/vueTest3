/**
 * Created by Administrator on 2017/3/7 0007.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import header from 'components/header/header.store'
import loading from 'components/loading.store'
import building from 'pages/building.store'

Vue.use(Vuex)

export default new Vuex.Store({
    modules : {
        header : header,
        loading : loading,
        building : building
    }
})