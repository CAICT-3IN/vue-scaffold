import {createRouter, RouteRecordRaw, createWebHistory} from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../views/Index.vue'),
        children: [
            {
                path: '/DetectionStatisticsList', //一级菜单一
                alias: '',
                name: 'DetectionStatisticsList',
                component: () => import('../views/DetectionStatisticsList.vue'),
            },
            {
                path: 'DetectionTaskList', //二级菜单一
                name: 'DetectionTaskList',
                component: () => import('../views/Detection/DetectionTaskList.vue'),

            },
            {
                path: 'PositiveManagementList', //二级菜单二
                name: 'PositiveManagementList',
                component: () => import('../views/Detection/PositiveManagementList.vue'),

            },
        ],
    },
    {
        path: '/404',
        component: () => import('../views/NoFound.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
