import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: '/',
            component:()=>import('@/views/Betting') ,
            meta: {
                title: '投注',
            }
        },
        {
            path: '/Service',
            name: '/Service',
            component: ()=>import('@/views/Service'),
            meta: {
                title: '客服',
            }
        },
        {
            path: '/My',
            name: '/My',
            component:()=>import('@/views/My'),
            meta: {
                title: '个人中心',
            }
        },
        {
            path: '/Finance',
            name: '/Finance',
            component: ()=>import('@/views/Finance'),
            meta: {
                title: '充值',
            }
        },
        {
            path: '/AddBank',
            name: '/AddBank',
            component: ()=>import('@/views/AddBank'),
            meta: {
                title: '绑定银行卡',
            }
        },
        {
            path: '/AddBankSon',
            name: '/AddBankSon',
            component: ()=>import('@/views/AddBankSon'),
            meta: {
                title: '添加银行卡',
            }
        },
        {
            path: '/Trend',
            name: '/Trend',
            component: ()=>import('@/views/Trend'),
            meta: {
                title: '我的推广',
            }
        },
        {
            path: '/Recharge_record',
            name: '/Recharge_record',
            component: ()=>import('@/views/Recharge_record'),
            meta: {
                title: '充值记录',
            }
        },
        {
            path: '/Put_record',
            name: '/Put_record',
            component: ()=>import('@/views/Put_record'),
            meta: {
                title: '提现记录',
            }
        }
    ]
})
