/**
 * Created by Administrator on 2017/3/7 0007.
 */
import {MENU_CLICK_INDEX,USER_CLICK_INDEX} from 'store/types'

export default {
    state : {
        menuClickIndex : 0,
        userClickIndex : -1
    },
    mutations : {
        [MENU_CLICK_INDEX] (state,n) {
            state.menuClickIndex = n
            state.userClickIndex = -1
        },
        [USER_CLICK_INDEX] (state,n) {
            state.menuClickIndex = -1
            state.userClickIndex = n
        }
    }
}