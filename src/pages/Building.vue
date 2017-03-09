<template>
    <div class="building">
        <div class="container">
            <div class="build_con_box">
                <img src="images/build_bg_con.png" class="build_img" usemap="#build_map">
                <map name="Map">   <!--热点锚点-->
                    <area shape="poly" coords="395,163,395,177,380,259,244,226,258,130,386,150" href="#">
                    <area shape="poly" coords="415,494,539,514,548,532,521,702,390,685,413,496" href="#">
                    <area shape="poly"
                          coords="866,227,867,243,856,299,810,291,814,255,742,245,734,282,645,266,655,194,805,218"
                          href="#">
                    <area shape="poly" coords="629,272,715,287,731,328,719,349,673,346,659,389,627,388,618,345"
                          href="#">
                    <area shape="poly" coords="768,407,842,418,850,337,835,303,805,301,798,337,760,330,752,367,768,407"
                          href="#">
                    <area shape="poly" coords="608,494,814,526,810,576,665,559,655,615,593,601,609,497" href="#">
                    <area shape="poly"
                          coords="795,640,804,664,792,725,727,721,717,698,597,679,597,695,585,693,577,674,590,611,794,642"
                          href="#">
                    <area shape="poly" coords="1009,360,1019,382,999,433,942,422,928,381,940,326,1000,340" href="#">
                    <area shape="poly" coords="1094,439,1109,486,1101,536,1042,533,1019,480,1031,428,1095,440" href="#">
                    <area shape="poly" coords="1282,381,1340,390,1345,299,1279,289,1262,378" href="#">
                    <area shape="poly"
                          coords="1252,507,1240,491,1257,400,1315,410,1318,453,1287,451,1279,469,1294,471,1290,511,1252,509"
                          href="#">
                </map>
                <ul>
                    <li  v-for="(build,index) in buildings" :class="['build_con_'+(index + 1)]">
                        <a class="build_con_btn" title="点击查看详情"></a>
                        <div class="build_con_window">
                            <form>
                                名称：<span>{{build.NAME}}</span><br>
                                <span class="building_floor">楼层：<input type="text" v-model="build.FLOOR"><br></span>
                                <span class="building_room">房间数：<input type="text" v-model="build.ROOM"><br></span>
                                <span class="building_comment">描述:<input type="text" v-model="build.COMMENT"></span>
                            </form>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <div class="building_float_report"></div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .building {
        position: relative;
        width: 100%;
        height: 996px;
        background: url(images/build_bg.jpg) #263329 center top no-repeat;
        margin-top: 2px;
        padding: 0 !important;
        .build_con_box {
            position: relative;
            width: 1350px;
            height: 750px;
            margin: 0 auto;
            .build_img {
                border: 0;
            }
            li {
                position: absolute;
            }
            .build_con_1 {
                width: 161px;
                height: 134px;
                top: 130px;
                left: 244px;
                &:hover {
                    width: 161px;
                    height: 134px;
                    top: 130px;
                    left: 244px;
                    background: url(images/build/build_light_1.png);
                    div {
                        display: block;
                    }
                }
            }
            .build_con_2 {
                width: 152px;
                height: 159px;
                top: 491px;
                left: 391px;
                &:hover {
                    width: 152px;
                    height: 159px;
                    top: 491px;
                    left: 391px;
                    background: url(images/build/build_light_2.png);
                    div {
                        display: block;
                    }
                }
            }
            .build_con_3 {
                width: 232px;
                height: 112px;
                top: 191px;
                left: 640px;
                &:hover {
                    width: 232px;
                    height: 112px;
                    top: 191px;
                    left: 640px;
                    background: url(images/build/build_light_3.png);
                    div {
                        display: block;
                    }
                }
            }
            .build_con_4 {
                width: 122px;
                height: 123px;
                top: 269px;
                left: 613px;
                &:hover {
                    width: 122px;
                    height: 123px;
                    top: 269px;
                    left: 613px;
                    background: url(images/build/build_light_4.png);
                    div {
                        display: block;
                    }
                }
            }
            .build_con_5 {
                width: 107px;
                height: 127px;
                top: 293px;
                left: 748px;
                &:hover {
                    width: 107px;
                    height: 127px;
                    top: 293px;
                    left: 748px;
                    background: url(images/build/build_light_5.png);
                    div {
                        display: block;
                    }
                }
            }
            .build_con_6 {
                width: 233px;
                height: 182px;
                top: 434px;
                left: 587px;
                &:hover {
                    width: 233px;
                    height: 182px;
                    top: 434px;
                    left: 587px;
                    background: url(images/build/build_light_6.png);
                    div {
                        display: block;
                    }
                }
            }
            .build_con_7 {
                width: 231px;
                height: 120px;
                top: 607px;
                left: 572px;
                &:hover {
                    width: 231px;
                    height: 120px;
                    top: 607px;
                    left: 572px;
                    background: url(images/build/build_light_7.png);
                    div {
                        display: block;
                    }
                }
            }
            .build_con_8 {
                width: 98px;
                height: 113px;
                top: 322px;
                right: 330px;
                &:hover {
                    width: 98px;
                    height: 113px;
                    top: 322px;
                    right: 330px;
                    background: url(images/build/build_light_8.png);
                    div {
                        display: block;
                    }
                }
            }
            .build_con_9 {
                width: 98px;
                height: 113px;
                top: 427px;
                right: 233px;
                &:hover {
                    width: 98px;
                    height: 113px;
                    top: 427px;
                    right: 233px;
                    background: url(images/build/build_light_8.png);
                    div {
                        display: block;
                    }
                }
            }
            .build_con_10 {
                width: 93px;
                height: 110px;
                top: 286px;
                right: 0px;
                &:hover {
                    width: 93px;
                    height: 110px;
                    top: 286px;
                    right: 0px;
                    background: url(images/build/build_light_9.png);
                    div {
                        display: block;
                    }
                }
            }
            .build_con_11 {
                width: 84px;
                height: 114px;
                top: 397px;
                right: 26px;
                &:hover {
                    width: 84px;
                    height: 114px;
                    top: 397px;
                    right: 26px;
                    background: url(images/build/build_light_10.png);
                    div {
                        display: block;
                    }
                }
            }
            .build_con_btn {
                display: block;
                width: 200px;
                height: 200px;
                margin: 0 auto;
            }
            .build_con_window {
                position: absolute;
                top: 50px;
                left: 0;
                right: 0;
                margin: 0 auto;
                width: 180px;
                border-radius: 2px;
                background: rgba(229, 241, 255, 0.9);
                border: solid 1px #748891;
                padding: 10px 12px;
                display: none;
                .building_floor, .building_room {
                    input {
                        width: 50px;
                        border: solid 1px #9cb8d8;
                        border-radius: 2px;
                        padding: 0 8px;
                        background: #fff;
                    }
                }
                .building_comment {
                    input {
                        width: 90px;
                        border-radius: 2px;
                        border: solid 1px #9cb8db;
                        padding: 5px;
                        background: #fff;
                    }
                }
            }
        }
    }
</style>
<script>
    /*
        time : 2017-03-09
        author : zhengdifei
        desc : 建筑物信息管理
        data : {
            buildings : 所有建筑物数据集合
        }
        methods : {
            initBuilding : 调用store里面action，获取楼宇数据
        }
    */
    import ajax from 'ajax'
    import {mapState,mapActions} from 'vuex'
    import {BUILDING_INIT} from 'store/types'

    export default{
        computed : mapState({
            buildings : state => state.building.data
        }),
        created(){
           this.initBuilding()
        },
        methods : {
            ...mapActions({
                initBuilding : BUILDING_INIT
            })
        }
    }




</script>
