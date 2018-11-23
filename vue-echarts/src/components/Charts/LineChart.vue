<template>
  <div class="mod-demo-echarts">
    <div id="J_chartLineBox" class="chart-box"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    data() {
      return {
        chartLine: null
      }
    },
    mounted() {
      this.initChartLine()
    },
    activated() {
      // 由于给echart添加了resize事件, 在组件激活时需要重新resize绘画一次, 否则出现空白bug
      this.chartLine.resize()
    },
    methods: {
      // 折线图
      initChartLine() {
        var option = {
          // 'title': {
          //   'text': '折线图堆叠'
          // },
  
          'tooltip': {
            'trigger': 'axis'
          },
          'legend': {
            'data': ['一般', '好评', '差评']
          },
          'grid': {
            'top': 25,
            'left': '2%',
            'right': '2%',
            'bottom': '3%',
            'containLabel': true
          },
          'toolbox': {
            'feature': {
              'saveAsImage': { }
            }
          },
          'xAxis': {
            'type': 'category',
            'boundaryGap': false,
            'data': ['公安', '社保', '环卫', '城管', '信息', '税务']
          },
          'yAxis': {
            'type': 'value'
          },
          'series': [
            {
              'name': '一般',
              'type': 'line',
              'stack': '总量',
              'data': [120, 132, 101, 134, 90, 230, 210]
            },
            {
              'name': '好评',
              'type': 'line',
              'stack': '总量',
              'data': [220, 182, 191, 234, 290, 330, 310]
            },
            {
              'name': '差评',
              'type': 'line',
              'stack': '总量',
              'data': [150, 232, 201, 154, 190, 330, 410]
            }
          ]
        }
        this.chartLine = echarts.init(document.getElementById('J_chartLineBox'))
        this.chartLine.setOption(option)
        window.addEventListener('resize', () => {
          this.chartLine.resize()
        })
      }
  
    }
  }
</script>

<style lang="scss">
  .mod-demo-echarts {
    > .el-alert {
      margin-bottom: 10px;
    }
    > .el-row {
      margin-top: -10px;
      margin-bottom: -10px;
      .el-col {
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }
    .chart-box {
      min-height: 350px;
    }
  }
</style>