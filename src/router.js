import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Betting',
            component:()=>import('@/views/Betting') ,
        },
        {
            path: '/',
            name: 'Service',
            component: ()=>import('@/views/Service'),
        },
        {
            path: '/',
            name: 'My',
            component:()=>import('@/views/My'),
        },
        {
            path: '/',
            name: 'Finance',
            component: ()=>import('@/views/Finance'),
        },
    ]
})
