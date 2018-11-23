<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="12">
                <bar-chart id="BarChart" style="width:100%;height:400px"></bar-chart>
            </el-col>
            <el-col :span="12">
               <!-- <heat-map-chart-o id="HeatMapChartO" style="width:100%;height:400px"></heat-map-chart-o> -->
            </el-col>
        </el-row>
        

    </div>
</template>

<script>
import BarChart from '@/components/Charts/BarChart'
// import HeatMapChartO from '@/components/Charts/HeatMapChartO'
export default {
    components:{
        BarChart
        // HeatMapChartO
    }
}
</script>

