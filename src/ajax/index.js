/**
 * time : 2017/3/8 0008.
 * author : zhengdifei
 * desc : 对vue-resource的封装
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import {LOADING_SHOW,LOADING_HIDDEN} from 'store/types'
import store from 'store'

Vue.use(VueResource)

Vue.http.interceptors.push((request,next) => {
    store.commit(LOADING_SHOW)
    next((response) => {
        store.commit(LOADING_HIDDEN)
    })
})

export default Vue.resource('http://192.168.100.100:8080/emanage/common.action')