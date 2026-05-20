<template>
  <el-container class="layout-container">
    <el-aside width="240px" class="layout-aside">
      <div class="logo">
        <img src="/vite.svg" alt="logo" />
        <span v-if="!isCollapse">管理后台</span>
      </div>
      <el-menu
        active-text-color="#409eff"
        background-color="#1e1e2d"
        class="el-menu-vertical"
        default-active="dashboard"
        text-color="#a2a3b7"
        router
      >
        <el-menu-item index="dashboard" :route="{ name: 'Dashboard' }">
          <el-icon><Odometer /></el-icon>
          <span>仪表盘</span>
        </el-menu-item>
        <el-sub-menu index="settings">
          <template #title>
            <el-icon><Setting /></el-icon>
            <span>系统设置</span>
          </template>
          <el-menu-item index="account">账户信息</el-menu-item>
          <el-menu-item index="system">参数配置</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    
    <el-container>
      <el-header class="layout-header">
        <div class="header-left">
          <el-button link @click="toggleSidebar">
            <el-icon :size="20"><Expand v-if="isCollapse" /><Fold v-else /></el-icon>
          </el-button>
          <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{ route.meta.title === 'Dashboard' ? '仪表盘' : route.meta.title }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="header-right">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <el-avatar :size="32" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
              <span class="username">{{ username }}</span>
              <el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      
      <el-main class="layout-main">
        <router-view v-slot="{ Component }">
          <transition name="fade-transform" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Odometer, Setting, Expand, Fold, ArrowDown } from '@element-plus/icons-vue' // Icons need to be auto-imported or globally registered? We registered all in main.ts
import { ElMessageBox } from 'element-plus'

const router = useRouter()
const route = useRoute()
const isCollapse = ref(false)
const username = computed(() => localStorage.getItem('user') || '管理员')

const toggleSidebar = () => {
  isCollapse.value = !isCollapse.value
}

const handleCommand = (command: string) => {
  if (command === 'logout') {
    ElMessageBox.confirm('确定要退出登录吗?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('user')
      router.push({ name: 'Login' })
    })
  }
}
</script>

<style scoped lang="scss">
.layout-container {
  height: 100vh;
}

.layout-aside {
  background-color: #1e1e2d;
  color: #fff;
  transition: width 0.3s;
  border-right: 1px solid #2b2b40;
  display: flex;
  flex-direction: column;

  .logo {
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    background-color: #1a1a27;
    
    img {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
    
    span {
      font-weight: 700;
      font-size: 18px;
    }
  }
  
  .el-menu-vertical {
    border-right: none;
    flex: 1;
  }
}

.layout-header {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  
  .header-left {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  .header-right {
    .el-dropdown-link {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      outline: none;
    }
  }
}

.layout-main {
  background-color: #f5f7fa;
  padding: 20px;
  overflow-y: auto;
}

/* Transition */
.fade-transform-enter-active,
.fade-transform-leave-active {
  transition: all 0.3s;
}

.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
