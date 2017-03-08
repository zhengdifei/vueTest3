/**
 * Created by Administrator on 2017/3/8 0008.
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