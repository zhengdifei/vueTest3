/**
 * time : 2017/3/8 0008.
 * author : zhengdifei
 * desc : loading组件对应的状态
 * state : {
 *      show : 标记loading是否显示
 * }
 * mutations : {
 *      LOADING_SHOW : 设置显示,
 *      LOADING_HIDDEN : 设置隐藏
 * }
 */
import {LOADING_SHOW,LOADING_HIDDEN} from 'store/types'

export default {
    state : {
        show : false
    },
    mutations : {
        [LOADING_SHOW] (state){
            state.show = true
        },
        [LOADING_HIDDEN] (state){
            state.show = false
        }
    }
}