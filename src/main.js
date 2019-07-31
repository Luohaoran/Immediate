import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/common.css'
import utils from './assets/js/utils'//工具集
import clipboard from 'clipboard'//复制
import api from './request/api'


import VueWechatTitle from 'vue-wechat-title'//微信title
import {Cell, CellGroup} from 'vant';//cell单元格
import {PullRefresh, List} from 'vant';//下拉刷新
import {Popup} from 'vant';//弹出层
Vue.use(PullRefresh).use(List)
    .use(Cell).use(CellGroup)
    .use(VueWechatTitle)
    .use(Popup);
Vue.config.productionTip = false;
Vue.prototype.clipboard = clipboard;
Vue.prototype.$utils = utils;
Vue.prototype.$api = api;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
