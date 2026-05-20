<template>
  <div class="dashboard-container">
    <el-row :gutter="20">
      <el-col :span="24">
        <h2 class="page-title">数据看板</h2>
      </el-col>
    </el-row>

    <!-- Cards Row -->
    <el-row :gutter="20" class="mb-4">
      <el-col :span="6" v-for="i in 4" :key="i">
        <el-card shadow="hover" class="stat-card">
          <template #header>
            <div class="card-header">
              <span>指标 {{ i }}</span>
            </div>
          </template>
          <div class="card-value">{{ Math.floor(Math.random() * 1000) }}</div>
        </el-card>
      </el-col>
    </el-row>

    <!-- Visualization Row -->
    <el-row :gutter="20" class="mb-4">
      <!-- ECharts -->
      <el-col :xs="24" :lg="12">
        <el-card shadow="never" class="chart-card">
          <template #header>
            <div class="card-header">
              <span>流量分析 (ECharts)</span>
            </div>
          </template>
          <ChartExample />
        </el-card>
      </el-col>

      <!-- DataV -->
      <el-col :xs="24" :lg="12">
        <el-card shadow="never" class="chart-card">
          <template #header>
            <div class="card-header">
              <span>实时排名 (DataV)</span>
            </div>
          </template>
          <DatavExample />
        </el-card>
      </el-col>
    </el-row>

    <!-- Motion Row -->
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card shadow="hover">
          <template #header>
            <div class="card-header">
              <span>动态交互组件 (VueBits / Motion)</span>
            </div>
          </template>
          <div class="motion-demo-area">
             <VueBitsExample />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import ChartExample from '../components/ChartExample.vue'
import DatavExample from '../components/DatavExample.vue'
import VueBitsExample from '../components/VueBitsExample.vue'
</script>

<style scoped>
.page-title {
  margin-bottom: 20px;
  font-weight: 600;
  color: #333;
}

.mb-4 {
  margin-bottom: 20px;
}

.stat-card {
  border: none;
  background: #fff;
  border-radius: 8px;
}

.card-value {
  font-size: 2rem;
  font-weight: bold;
  color: #409eff;
}

.chart-card {
  border: none;
  border-radius: 8px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
}

.motion-demo-area {
  display: flex;
  justify-content: center;
  padding: 20px;
}
</style>
