<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="12">
               <line-marker id="lineMarker" style="width:100%;height:400px"></line-marker>
            </el-col>
            <el-col :span="12">
                <mix-chart id="mixChart" style="width:100%;height:400px"></mix-chart>
            </el-col>
        </el-row>
    
    </div>
</template>

<script>
import lineMarker from '@/components/Charts/lineMarker'
import mixChart from '@/components/Charts/mixChart'

    export default {
        components:{
            lineMarker,
            mixChart
        }
    }
</script>

<style scoped>

</style>