<template>
  <div class="system-container">
    <h2 class="page-title">参数配置</h2>
    <el-card>
      <el-form :model="form" label-width="120px">
        <el-form-item label="系统名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="开启通知">
          <el-switch v-model="form.notifications" />
        </el-form-item>
        <el-form-item label="主题色">
          <el-color-picker v-model="form.themeColor" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存配置</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'

const form = reactive({
  name: 'Vue3 Admin Pro',
  notifications: true,
  themeColor: '#409EFF'
})

const onSubmit = () => {
  ElMessage.success('配置已保存 (演示)')
}
</script>

<style scoped>
.page-title {
  margin-bottom: 20px;
  font-weight: 600;
  color: #333;
}
</style>
