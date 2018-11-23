<template>
    <div class="map" id="s-map">
        <div id="chartMap" class="chartGauge" :style="{height:height,width:width}"></div>
    </div>
</template>
 
<script >　　 
// 引入到所用组件
import echarts from 'echarts'
// echart安装好后node_modules里面也有map json ,也可以自定义引入某个城市
import fs from '@/assets/json/guangdong/foshan'
     
export default {
    data () {
        return {
            font: '24'
        }
    },
    props: {
        width: {
            type: String,
            default: '200px'
        },
        height: {
            type: String,
            default: '400px'
        }
    },
    watch: {},
    methods: {
        drawmap() {
            let chartMap = document.getElementById('chartMap');
            let smap = document.getElementById('s-map');　　　　　　　　　 // 动态修改图表的宽高，达到自适应的效果　
            var resizeWorldMapContainer = function () {
                chartMap.style.width  = smap.clientWidth +'px';
                chartMap.style.height = smap.clientHeight + 'px';
            };
            resizeWorldMapContainer();
            // 注册可用的地图
            echarts.registerMap('foshan', fs);
            let myChart = echarts.init(chartMap);
            myChart.setOption({
                roam: false,
                tooltip: {
                  trigger: 'item'
                },
                toolbox: {
                  show: true,
                  showTitle: true,
                  orient: 'vertical',
                  left: 'right',
                  top: 'center',
                  feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                  }
                },
                series: [
                    {
                        name: '',
                        type: 'map',
                        map: 'foshan',
                        mapType: '佛山',
                        roam: false,
                        zoom: 1.2,
                        itemStyle:{
                            normal:{
                                areaColor: '#181d36',
                                label:{
                                    show:true,
                                    textStyle: {
                                        color: '#fff',
                                        fontSize: this.font
                                    }
                                },
                            },
                            emphasis:{
                                areaColor: '#fff',
                                label:{
                                    show:true,
                                    textStyle: {
                                        color: '#398def',
                                        fontSize: this.font
                                    }
                                }
                                  
                            }
                        },
                        data:[
                           { name: '顺德区', value: [113.203292, 22.884524, 567841] },
                           { name: '顺德区', value: [113.060138, 22.85149, 4578] }
                        ]
                    }
                ]
            });

            // window的方法在一个页面只加载一次，window.onresize只在一个图表中发生一次，因此在一个页面多图时，只有一个图会自适应
            window.onresize = function () {
                resizeWorldMapContainer();
                myChart.resize();
            };
          
        }
    },
    mounted () {
        this.drawmap()
    },
    destroyed () {}
}
</script>
 
<style lang="scss" scoped>
    @function px2rem($px) {
        $rem: 75px;
        @return ($px / $rem) + rem;
    }
</style>