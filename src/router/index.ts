import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
        meta: {
            title: 'Login',
            allowGuest: true
        }
    },
    {
        path: '/',
        component: () => import('../layout/MainLayout.vue'),
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import('../views/Dashboard.vue'),
                meta: {
                    title: 'Dashboard'
                }
            },
            {
                path: 'account',
                name: 'Account',
                component: () => import('../views/settings/Account.vue'),
                meta: {
                    title: '账户信息'
                }
            },
            {
                path: 'system',
                name: 'System',
                component: () => import('../views/settings/System.vue'),
                meta: {
                    title: '参数配置'
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, _from, next) => {
    const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true'

    if (to.meta.allowGuest) {
        if (isAuthenticated) {
            next({ name: 'Dashboard' })
        } else {
            next()
        }
    } else {
        if (isAuthenticated) {
            next()
        } else {
            next({ name: 'Login' })
        }
    }
})

export default router
