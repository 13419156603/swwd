const routes = [
    {
        path: '',
        redirect: { name: 'login' },
        meta: { title: '登录' },
        children: [
            {
                path: 'login',
                name: 'login',
                meta: {},
                component: () => import('../views/login/login.vue')
            },
            {
                path: 'home',
                name: 'home',
                meta: {},
                component: () => import('../views/home/index.vue')
            },
            {
                // history模式需要通配所有路由，详见vue-router文档
                path: '/app/app-vue3/:pathMatch(.*)*',
                name: 'app-vue3',
                meta: {},
                component: () => import('@/components/SubContainer.vue')
            },
            {
                path: '/app/app-vue2/',
                name: 'app-vue2',
                meta: {},
                component: () => import('@/components/SubContainer.vue')
            },

        ]
    }
]

export default routes