/**
 * time : 2017/3/10 0010.
 */
import {BUILDSTATIS_DATA,BUILDSTATIS_INIT} from 'store/types'
import ajax from 'ajax'


export default {
    state : {
        buildingData : [],
        thisMonthData : [],
        lastMonthData : []
    },
    mutations : {
        [BUILDSTATIS_DATA] (state,data) {
            state.buildingData = data.buildingData
            state.thisMonthData = data.thisMonthData
            state.lastMonthData = data.lastMonthData
        }
    },
    actions : {
        [BUILDSTATIS_INIT] ({commit}){
            ajax.get({'command':'T_EMANAGE_COLLECT.selectByBuildingSum','YEAR':2016,'MONTH':12})
                .then(function(response){
                    var buildingData = [],thisMonthData = [],lastMonthData = []
                    var resultObj = response.body.data
                    for(var i =0;i<resultObj["lastMonth"].length;i++){
                        var buildingName = resultObj["lastMonth"][i]["BUILDING_NAME"]
                        buildingData.push(buildingName)
                        lastMonthData.push(resultObj["lastMonth"][i]["USE_TOTAL"])
                        var mark = false
                        for(var j =0;j<resultObj["thisMonth"].length;j++){
                            if(buildingName == resultObj["thisMonth"][j]["BUILDING_NAME"]){
                                thisMonthData.push(resultObj["thisMonth"][j]["USE_TOTAL"])
                                mark = true
                                break
                            }
                        }

                        if(mark){
                            thisMonthData.push(0)
                        }
                    }
                    commit(BUILDSTATIS_DATA, {
                        'buildingData' : buildingData,
                        'thisMonthData' : thisMonthData,
                        'lastMonthData' : lastMonthData
                    })
                },function(response){
                    console.log(response)
                })
        }
    }
}