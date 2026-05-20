<template>
  <div class="account-container">
    <h2 class="page-title">账户信息</h2>
    <el-card>
      <el-descriptions title="当前登录用户" :column="1" border>
        <el-descriptions-item label="用户名">{{ username }}</el-descriptions-item>
        <el-descriptions-item label="角色">超级管理员</el-descriptions-item>
        <el-descriptions-item label="登录时间">{{ new Date().toLocaleString() }}</el-descriptions-item>
      </el-descriptions>
      
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const username = computed(() => localStorage.getItem('user') || '管理员')
</script>

<style scoped>
.page-title {
  margin-bottom: 20px;
  font-weight: 600;
  color: #333;
}
</style>
