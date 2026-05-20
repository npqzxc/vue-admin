<template>
  <div 
    class="motion-card"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :hover="{ scale: 1.05 }"
    :tapped="{ scale: 0.95 }"
    :delay="200"
  >
    <div class="content">
      <div class="icon-pulse">
        <el-icon :size="40"><Cpu /></el-icon>
      </div>
      <h3>Vue Motion Bits</h3>
      <p>Interactive motion component demo.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Cpu } from '@element-plus/icons-vue'
</script>

<style scoped>
.motion-card {
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  position: relative;
  overflow: hidden;
}

.content {
  text-align: center;
  z-index: 2;
}

.icon-pulse {
  margin-bottom: 20px;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}

h3 {
  margin: 0 0 10px 0;
  font-size: 1.5rem;
}

p {
  opacity: 0.8; 
  margin: 0;
}
</style>
