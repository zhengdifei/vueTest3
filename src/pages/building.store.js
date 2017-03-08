/**
 * Created by Administrator on 2017/3/8 0008.
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