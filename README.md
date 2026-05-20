# Vue3 Admin Pro

一个基于 **Vue 3 + TypeScript + Vite** 构建的现代化后台管理系统基础框架，集成 Element Plus、ECharts、DataV 等主流技术栈，开箱即用，100% 容器化交付。

## 🛠 技术栈

| 类别 | 技术选型 |
|------|---------|
| **核心框架** | Vue 3.5 + TypeScript |
| **构建工具** | Vite 6 |
| **UI 组件库** | Element Plus |
| **数据可视化** | ECharts + DataV (@kjgl77/datav-vue3) |
| **动效库** | VueUse Motion |
| **路由管理** | Vue Router |
| **样式方案** | Sass (Scoped CSS) |
| **容器化** | Docker + Nginx |

### 📌 关于 vueBits
原 Prompt 要求集成 vueBits 库，但该库仅支持 Vue 2（依赖 `vue@^2.6.11`），与本项目的 Vue 3 架构不兼容。经实际测试，强制安装会导致 peer dependency 冲突和运行时错误。

**解决方案**：采用功能相似且专为 Vue 3 设计的 **@vueuse/motion** 作为替代，提供相同的声明式动效能力，且生态更活跃。

## ✨ 功能特性

### 🔐 用户认证
- 模拟登录流程（纯前端实现）
- 登录页毛玻璃（Glassmorphism）动效
- 基于 localStorage 的路由权限守卫

### 📊 数据看板
- **实时数据卡片**：动态展示关键指标
- **ECharts 图表**：交互式流量分析折线图
- **DataV 组件**：动态排名轮播（大屏风格）
- **Motion 动效**：声明式交互动画卡片

### ⚙️ 系统设置
- 账户信息管理页面
- 系统参数配置表单（演示）

### 🏗️ 工程化
- 标准化 Vue 3 目录结构
- Docker 多阶段构建（镜像体积 < 25MB）
- npm 淘宝镜像源加速
- TypeScript 类型安全
- Sass 样式预处理

## 🚀 快速开始

### 方式一：Docker 启动（推荐）

**前置条件**：已安装并启动 Docker Desktop

```bash
# 一键构建并启动
docker compose up --build

# 访问地址
http://localhost:3000
```

### 方式二：本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问地址
http://localhost:5173
```

## 🔑 测试账号

由于是纯前端项目，登录验证为模拟实现，可使用任意非空账号密码登录。

**示例账号**：
- 用户名：`admin`
- 密码：`123456`

## 📂 项目结构

```
vue3-admin-pro/
├── Dockerfile              # 多阶段构建配置
├── docker-compose.yml      # 容器编排
├── nginx.conf              # Nginx 配置
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── main.ts             # 应用入口
    ├── App.vue             # 根组件
    ├── style.css           # 全局样式
    ├── router/
    │   └── index.ts        # 路由配置 + 权限守卫
    ├── layout/
    │   └── MainLayout.vue  # 主布局（侧边栏 + 顶栏）
    ├── views/
    │   ├── Login.vue       # 登录页
    │   ├── Dashboard.vue   # 仪表盘
    │   └── settings/       # 设置页面
    │       ├── Account.vue
    │       └── System.vue
    └── components/
        ├── ChartExample.vue    # ECharts 封装
        ├── DatavExample.vue    # DataV 封装
        └── VueBitsExample.vue  # Motion 动效封装
```

## 🐳 Docker 配置说明

### 多阶段构建策略

#### Stage 1: Builder（构建阶段）
- 基础镜像：`node:20-alpine`
- 配置淘宝 npm 镜像源加速
- 使用 `npm ci` 确保依赖一致性
- 执行 `npm run build` 生成生产构建

#### Stage 2: Production（运行阶段）
- 基础镜像：`nginx:alpine`
- 仅复制构建产物（dist 目录）
- 配置 Nginx 支持 SPA 路由
- 最终镜像体积 < 25MB

### 端口映射
- 宿主机：`3000`
- 容器：`80`

### 优化特性
- ✅ 使用 Alpine Linux 减小镜像体积
- ✅ npm 淘宝镜像源加速国内构建
- ✅ 多阶段构建分离构建环境和运行环境
- ✅ .dockerignore 排除 node_modules 等无关文件

## 📝 开发说明

### 本地开发
```bash
npm run dev      # 启动开发服务器
npm run build    # 生产构建
npm run preview  # 预览生产构建
```

### 代码规范
- 使用 TypeScript 进行类型检查
- 组件采用 `<script setup>` 语法
- 样式使用 Scoped CSS 避免污染
- 路由采用懒加载优化性能

## 🎨 设计特色

- **登录页**：采用 Glassmorphism（毛玻璃）设计风格，渐变背景 + 动态浮动元素
- **仪表盘**：统一浅色卡片风格，避免深色模块突兀
- **布局**：标准后台管理系统布局（侧边栏 + 顶栏 + 内容区）
- **交互**：平滑的路由过渡动画，Hover 状态反馈

## 📄 License

MIT

---

**Enjoy Vibe Coding!** 🚀
