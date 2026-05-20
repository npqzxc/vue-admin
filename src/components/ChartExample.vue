<template>
  <div ref="chartRef" class="chart-container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref<HTMLElement | null>(null)
let myChart: echarts.ECharts | null = null

const initChart = () => {
  if (chartRef.value) {
    myChart = echarts.init(chartRef.value)
    
    // Premium Dark Style Option
    const option = {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        top: '15%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: { lineStyle: { color: '#888' } },
        axisLabel: { color: '#ccc' }
      },
      yAxis: {
        type: 'value',
        axisLine: { show: false },
        axisLabel: { color: '#ccc' },
        splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
      },
      series: [
        {
          name: 'Traffic',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 8,
          showSymbol: false,
          lineStyle: {
            width: 4,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: '#00d2ff' },
              { offset: 1, color: '#3a7bd5' }
            ])
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(0, 210, 255, 0.4)' },
              { offset: 1, color: 'rgba(58, 123, 213, 0)' }
            ])
          },
          data: [120, 282, 191, 534, 390, 830, 710],
          emphasis: {
            focus: 'series'
          }
        }
      ]
    }
    
    myChart.setOption(option)
  }
}

const resizeHandler = () => {
  myChart?.resize()
}

onMounted(() => {
  initChart()
  window.addEventListener('resize', resizeHandler)
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeHandler)
  myChart?.dispose()
})
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 300px;
}
</style>
