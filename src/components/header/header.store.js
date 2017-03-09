/**
 * time : 2017/3/7 0007.
 * author : zhengdifei
 * desc : header组件的状态信息
 * state : {
 *      menuClickIndex : 系统菜单选中序号,
        userClickIndex : 用户菜单选中序号
 * }
 * mutations : {
 *      MENU_CLICK_INDEX : 设置系统菜单的选中状态,
 *      USER_CLICK_INDEX : 设置用户菜单的选中状态
 * }
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