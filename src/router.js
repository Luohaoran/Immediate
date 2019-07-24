import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Betting',
            component:()=>import('@/views/Betting') ,
            meta: {
                title: '投注',
            }
        },
        {
            path: '/Service',
            name: 'Service',
            component: ()=>import('@/views/Service'),
            meta: {
                title: '客服',
            }
        },
        {
            path: '/My',
            name: 'My',
            component:()=>import('@/views/My'),
            meta: {
                title: '个人中心',
            }
        },
        {
            path: '/Finance',
            name: 'Finance',
            component: ()=>import('@/views/Finance'),
            meta: {
                title: '充值',
            }
        },
        {
            path: '/AddBank',
            name: 'AddBank',
            component: ()=>import('@/views/AddBank'),
            meta: {
                title: '添加银行卡',
            }
        }
    ]
})
