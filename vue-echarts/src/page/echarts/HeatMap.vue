<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="12">
                <heat-map-chart id="HeatMapChart" style="width:100%;height:400px"></heat-map-chart>
            </el-col>
            <el-col :span="12">
               <heat-map-chart-o id="HeatMapChartO" style="width:100%;height:400px"></heat-map-chart-o>
            </el-col>
        </el-row>
        

    </div>
</template>

<script>
import HeatMapChart from '@/components/Charts/HeatMapChart'
import HeatMapChartO from '@/components/Charts/HeatMapChartO'
export default {
    components:{
        HeatMapChart,
        HeatMapChartO
    }
}
</script>

