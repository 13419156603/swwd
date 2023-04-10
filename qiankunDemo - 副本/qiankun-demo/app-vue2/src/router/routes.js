const routes = [
    {
        path: '/',
        redirect: { name: 'home' },
        meta: { title: '首页' },
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/home/index.vue')
            }
        ]
    },
    // {
    //     path: '/login',
    //     component: () => import('@/views/login/index'),
    //     hidden: true
    // },
]

export default routes