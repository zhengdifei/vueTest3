/**
 * time : 2017/3/8 0008.
 * author : zhengdifei
 * desc : Building的状态管理
 * state : {
 *      data : 存储所有楼宇信息
 * }
 * mutations : {
 *      ADD_TO_BUILDING : 给data赋值
 * }
 * actions : {
 *      BUILDING_INIT : ajax请求，获取楼宇详细信息
 * }
 */
import {ADD_TO_BUILDING,BUILDING_INIT} from 'store/types'
import ajax from 'ajax'

export default {
    state : {
        data : []
    },
    mutations : {
        [ADD_TO_BUILDING] (state,data) {
            state.data = data
        }
    },
    actions : {
        [BUILDING_INIT] ({commit}){
            ajax.get({'command':'T_EMANAGE_BUILDING.selectAll'})
                .then(function(response){
                    commit(ADD_TO_BUILDING,response.body.data)
                },function(response){
                    console.log(response)
                })
        }
    }
}