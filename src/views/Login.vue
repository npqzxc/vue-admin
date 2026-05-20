<template>
  <div class="login-container">
    <div class="login-bg"></div>
    <div class="login-card glass-panel">
      <div class="login-header">
        <h1>欢迎回来</h1>
        <p>请输入您的账号密码以访问后台</p>
      </div>
      
      <el-form :model="form" ref="formRef" :rules="rules" class="login-form" size="large">
        <el-form-item prop="username">
          <el-input 
            v-model="form.username" 
            placeholder="用户名" 
            :prefix-icon="User"
            class="glass-input"
          />
        </el-form-item>
        
        <el-form-item prop="password">
          <el-input 
            v-model="form.password" 
            type="password" 
            placeholder="密码" 
            :prefix-icon="Lock"
            show-password
            class="glass-input"
            @keyup.enter="handleLogin"
          />
        </el-form-item>

        <el-button type="primary" class="login-btn" :loading="loading" @click="handleLogin">
          登录
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { User, Lock } from '@element-plus/icons-vue'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'

const router = useRouter()
const formRef = ref<FormInstance>()
const loading = ref(false)

const form = reactive({
  username: '',
  password: ''
})

const rules = reactive<FormRules>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const handleLogin = async () => {
  if (!formRef.value) return
  
  await formRef.value.validate((valid) => {
    if (valid) {
      loading.value = true
      // Mock login delay
      setTimeout(() => {
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('user', form.username)
        ElMessage.success('登录成功')
        router.push({ name: 'Dashboard' })
        loading.value = false
      }, 1000)
    }
  })
}
</script>

<style scoped>
/* Styles remain same */
.login-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #0f0c29;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

/* Animated Background Circles (VueBits style vibe) */
.login-bg::before,
.login-bg::after {
  content: '';
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 0;
  opacity: 0.4;
  animation: float 10s infinite ease-in-out alternate;
}

.login-bg::before {
  background: #ff00cc;
  top: -100px;
  left: -100px;
}

.login-bg::after {
  background: #3333ff;
  bottom: -100px;
  right: -100px;
  animation-delay: -5s;
}

@keyframes float {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

.login-card {
  position: relative;
  z-index: 10;
  width: 400px;
  padding: 40px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05); /* Glass cards */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  text-align: center;
}

.login-header h1 {
  margin-bottom: 10px;
  font-size: 2rem;
  color: #fff;
  font-weight: 600;
}

.login-header p {
  color: rgba(255,255,255,0.7);
  margin-bottom: 30px;
}

.login-form :deep(.el-input__wrapper) {
  background: rgba(0, 0, 0, 0.2);
  box-shadow: none;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  /* Remove aggressive padding that breaks layout */
  padding: 1px 11px;
}

.login-form :deep(.el-input__inner) {
  color: #fff;
}

.login-form :deep(.el-input__prefix-inner) {
  color: #fff; 
  font-size: 18px;
  display: flex;
  align-items: center;
}

/* Manually constrain icon size if Element styles fail */
.login-form :deep(.el-icon) {
  width: 1em;
  height: 1em;
}

.login-form :deep(.el-input__wrapper.is-focus) {
  box-shadow: 0 0 0 1px #409eff inset;
  background: rgba(0,0,0,0.3);
}

.login-btn {
  width: 100%;
  padding: 22px 0;
  font-size: 16px;
  border-radius: 8px;
  margin-top: 10px;
  font-weight: 600;
  letter-spacing: 0.5px;
  background: linear-gradient(90deg, #ff00cc, #3333ff);
  border: none;
  transition: all 0.3s ease;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(51, 51, 255, 0.4);
}
</style>
