/**
 * time : 2017/3/7 0007.
 * author : zhengdifei
 * desc : 配置所有系统的访问路径
 * path : {
 *      / : 首页,
 *      /building : 建筑物管理页
 * }
 */
import Home from 'pages/Home.vue'
import Building from 'pages/Building.vue'

export default [{
    path : '/',
    component : Home
},{
    path : '/building',
    component : Building
}]