import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/LineChart'
        },
        {
            path: '/',
            component: resolve => require(['../page/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/LineChart',
                    component: resolve => require(['../page/echarts/LineChart.vue'], resolve),
                    meta: { title: '折线图' }
                },
                {
                    path: '/Barchart',
                    component: resolve => require(['../page/echarts/Barchart.vue'], resolve),
                    meta: { title: '柱状图' }
                },
                {
                    path: '/Map',
                    component: resolve => require(['../page/echarts/Map.vue'], resolve),
                    meta: { title: '地图' }
                },
                {
                    path: '/HeatMap',
                    component: resolve => require(['../page/echarts/HeatMap.vue'], resolve),
                    meta: { title: '热力地图' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: resolve => require(['../page/Permission.vue'], resolve),
                    meta: { title: '权限测试', permission: true } // 只有用 admin 账号登录的才拥有管理员权限，才能进到这个页面
                },
                {
                    path: '/404',
                    component: resolve => require(['../page/404.vue'], resolve),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: resolve => require(['../page/403.vue'], resolve),
                    meta: { title: '403' }
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../page/Login.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
