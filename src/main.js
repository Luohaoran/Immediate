import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/common.css'
import utils from './assets/js/utils'//工具集
import clipboard from 'clipboard'//复制


import VueWechatTitle from 'vue-wechat-title'//微信title
import {Cell, CellGroup} from 'vant';//cell单元格
import {PullRefresh, List} from 'vant';//下拉刷新
Vue.use(PullRefresh).use(List)
    .use(Cell).use(CellGroup)
    .use(VueWechatTitle);

Vue.config.productionTip = false;
Vue.prototype.clipboard = clipboard;
Vue.prototype.$utils = utils;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
