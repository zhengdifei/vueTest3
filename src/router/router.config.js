/**
 * time : 2017/3/7 0007.
 * author : zhengdifei
 * desc : 配置所有系统的访问路径
 * path : {
 *      / : 首页,
 *      /Building : 建筑物管理页,
 *      /ElecAnalysis : 用电统计分析
 * }
 */
import Home from 'pages/Home.vue'
import Building from 'pages/Building.vue'
import ElecAnalysis from 'pages/elec/analysis/index.vue'

export default [{
    path : '/',
    component : Home
},{
    path : '/Building',
    component : Building
},{
    path : '/ElecAnalysis',
    component : ElecAnalysis
}]