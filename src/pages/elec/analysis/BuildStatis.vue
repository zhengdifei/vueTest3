<template>
    <v-widget>
        <span slot="title" @click="testClick">按楼统计用电量{{thisMonthData}}</span>
        <div id="buildStatisDiv" slot="content"></div>
    </v-widget>
</template>
<style lang="scss">
    #buildStatisDiv {
        height: 158px;
    }
</style>
<script>
    import widget from 'components/widget.vue'
    import echarts from 'echarts'
    import {mapState,mapActions}  from 'vuex'
    import {BUILDSTATIS_DATA,BUILDSTATIS_INIT} from 'store/types'

    var echartObj = null
    var echartOption = {
        title: {
            text: 'x：功率（单位：kW）',
            textStyle:{
                color:'#79a5bd',
                fontSize:6,
                fontWeight:'normal'
            }
        },
        tooltip: {//提示窗
            trigger: 'axis',
            transitionDuration: 0,
            backgroundColor: 'rgba(0,45,87,0.8)',
            axisPointer: {
                type: 'shadow',
                shadowStyle: {//shadow的背景颜色
                    color: 'rgba(135,200,250,0.3)',
                    width: 'auto',
                    type: 'default'
                }
            },
            borderColor: '#1874bb',
            borderRadius: 2,
            borderWidth: 1, //提示窗边框
            padding: 8,
            position: function(p) {
                // 位置回调
                // console.log && console.log(p);
                return [p[0] - 25, p[1]];
            },
            textStyle: { //提示窗文字
                color: '#a7daff',
                decoration: 'none',
                fontFamily: '微软雅黑, sans-serif',
                fontSize: 12
            },
        },
        legend: {
            data:["上月","本月"],
            itemWidth:9,
            itemHeight:9,
             x: '150', // 'center' | 'left' | {number},
            borderColor:"#6FB4F9",
            textStyle: {color: '#79a5bd'},
        },//提示窗完
        toolbox: {//工具框
          show : true,
          feature : {
            saveAsImage : {show: true},
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            // restore : {show: true,title : '11', icon :'image:../../assets/images/right.png'}
            restore : {show: true,title : '还原', color : '#0091a7',backgroundColor:"rgba(0,39,75,0.5)",borderColor:"#10578e"}
          }
        },
        //网格线外边框
        grid: {
            borderWidth:1,//网格外框粗细//
            backgroundColor: 'rgba(61,79,127,0.01)', //网格透明填充
            borderColor:'rgba(255,255,255,0.05)', //网格外框颜色
            x: 45, //图表左边边距
            y: 33, //图表顶部边距
            x2:18, //图表右边边距
            y2:25 //图表底部边距
            //width:220,
            //height:116
        },
        //网格线外边框完
        calculable : true,
        xAxis : [
            {
                type : 'category',
                splitArea : {show : true},//保留网格区域
                axisLabel : {    //Y轴数字
                    show : true,
                    interval:0,//0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                    textStyle : {
                        color : '#6E9AB3',
                        fontFamily : '微软雅黑'
                        //align : 'left'
                    }
                },
                data : ['101','102','103','104','201','202']
            }
        ],
        yAxis : [
            {       //左边y轴
                //name:'电量趋势',
                type : 'value',
                splitNumber: 5,
                splitLine:{show: false},//去除网格线
                splitArea : {show : true,
                    areaStyle:{//设置区域颜色背景
                        color:['rgba(144,238,144,0.3)','rgba(135,200,250,0.3)']
                    }
                },//保留网格区域,
                axisLabel:{    //Y轴数字
                    show : true,
                    textStyle : {
                        color : '#6E9AB3',
                        fontFamily : 'Arial'
                        // align : 'center'
                    }
                }
            }
        ],
        series :[
        {
            name:'上月',
            type:'bar',
            smooth: true,     //是否转曲线
            itemStyle: {   //标记点样式
                normal: {
                    barBorderColor:'#70A7F7',
                    barBorderWidth: 1,
                    // color: '#004A56',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1.3, [{
                        offset: 0,
                        color: 'rgba(0,240,255,0.8)'
                    }, {
                        offset: 1,
                        color: 'rgba(0,83,90,0.8)'
                    }]),
                    lineStyle : {
                        shadowColor : "rgba(0,240,255,0.8)"
                    },
                    areaStyle: {   //区域填充样
                        normal: {
                            color: 'rgba(0,83,90,0.8)'
                        }
                    },
                    shadow:true,
                    shadowColor: 'rgba(0, 0, 0, 0.4)',
                    shadowBlur: 10
                }
            },
            barWidth : 15,//柱图宽度
            data:['101','102','103','104','201','202']
            },
            {
                name:'本月',
                type:'bar',
                // xAxisIndex     : 1,
                smooth: true,     //是否转曲线
                itemStyle: {   //标记点样式
                    normal: {
                        barBorderColor:'#70A7F7',
                        barBorderWidth: 1,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1.3, [{
                        offset: 0,
                        color: 'rgba(47,130,255,0.8)'
                    }, {
                        offset: 1,
                        color: 'rgba(0,52,123,0.8)'
                    }]),
                       lineStyle : {
                          shadowColor : "rgba(47,130,255,0.8)"
                        },
                        areaStyle: {   //区域填充样
                            normal: {
                                color: 'rgba(0,52,123,0.8)'
                            }
                        },
                        shadowColor: 'rgba(0, 0, 0, 0.4)',
                        shadowBlur: 10
                    }
                },
                barWidth : 15,//柱图宽度
                data:['10','12','31','42','21','26']
            }]
    }

    export default{
        computed : {
            ...mapState({
                buildingData : state => state.buildStatis.buildingData,
                thisMonthData : state => state.buildStatis.thisMonthData,
                lastMonthData : state => state.buildStatis.lastMonthData
            })
        },
        watch: {
            thisMonthData : function (newData,oldData) {
              echartObj.setOption({
              xAxis:[{
                data : this.buildingData
              }],
              series:[{
                data : this.thisMonthData
              },{
                data : this.lastMonthData
              }]})
            }
        },
        created() {
            this.initBuildStatis()
        },
        mounted() {
            echartObj = echarts.init(document.getElementById('buildStatisDiv'))
            echartObj.setOption(echartOption)
        },
        components : {
            'v-widget' : widget
        },
        methods : {
            ...mapActions({
                initBuildStatis : BUILDSTATIS_INIT
            }),
            testClick : function(){
                this.$store.commit(BUILDSTATIS_DATA,{
                    'buildingData' : ['101','102','103','104','201','202'],
                    'thisMonthData' : ['101','102','103','104','201','202'],
                    'lastMonthData' : ['10','12','31','42','21','26']
                })
            }
        }
    }


</script>