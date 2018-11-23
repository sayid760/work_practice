<template>
     <div :id="id" :style="{height:height,width:width}"></div>
</template>
 
<script>
// 引入到所用组件
import echarts from 'echarts'
// echart安装好后node_modules里面也有map json ,也可以自定义引入某个城市
import fs from '@/assets/json/guangdong/foshan'
export default {
  data() {
    return {
      font: '24',
      HeatChart: null
    }
  },
  props: {
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  methods: {
    drawmap() {
      // 注册可用的地图
      echarts.registerMap('foshan', fs)
      this.HeatChart = echarts.init(document.getElementById(this.id))
      this.HeatChart.setOption({
           title: {
          text: '布局城市展示',
          x: 'left',
          textStyle: {
            fontSize: 33,
            color: '#333',
            fontWeight: 'bold',
            fontFamily: 'testFamily'
          }
        },
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
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        visualMap: { // 热力图颜色
          show: false,
          inRange: {
            color: ['#f34501', '#fffe02', '#33ff00', '#2f48ff', '#0058af'].reverse()
          },
          textStyle: {
            color: '#fff'
          }
        },
        // roam: false,
        geo: {
          map: 'foshan',
          label: {
            emphasis: {
              show: true
            }
          },
          roam: true, //是否缩放
          itemStyle: {
            normal: {
              areaColor: '#638fc3',
              borderColor: '#c9e2ff',
              borderWidth: 0.5,
              label: {
                show: true, // 是否在普通状态下显示标签。
                textStyle: {
                  color: 'rgba(255,255,255,1)',
                  fontSize: this.font
                }
              }
            },
            emphasis: {
              areaColor: '#63b1c3',
              label: {
                show: true,
                textStyle: {
                  color: 'rgba(255,255,255,1)',
                  fontSize: this.font
                }
              }
            }
          }
        },
        series: [
          {
            name: '',
            type: 'heatmap',
            // map: 'foshan',
            mapType: 'foshan',
            roam: true,
            zoom: 1.5,
            coordinateSystem: 'geo', // 散点分布
            data: [
              { name: '沙提机场', value: [113.079066, 23.086815, 12312] },
              { name: '佛山汽车站', value: [113.117298, 23.04758, 256] },
              { name: '季华园地铁', value: [113.114998, 23.012725, 14782] },
              { name: '山水深林公园', value: [112.879328, 23.19275, 9620] },
              { name: '千灯湖', value: [113.153715, 23.075761, 145874] },
              { name: '南海实验小学', value: [113.151344, 23.068346, 7812] },
              { name: '顺德区', value: [113.203292, 22.884524, 567841] },
              { name: '顺德区', value: [113.060138, 22.85149, 4578] },
              { name: '南海区', value: [112.952629, 22.998479, 24586] },
              { name: '高明区', value: [112.850294, 22.92607, 8796] },
              { name: '高明区', value: [112.580399, 22.826962, 781] }
            ]
          }
        ]
      })
      window.addEventListener('resize', () => {
        this.HeatChart.resize()
      })
    }
  },
  mounted() {
    this.drawmap()
  }
}
</script>
