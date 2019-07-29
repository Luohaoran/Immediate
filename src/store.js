import Vue from 'vue'
import Vuex from 'vuex'

import cc from './assets/js/cc'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id:cc.getLocal('id')||'',
    username:cc.getLocal('username')||'',
    money:cc.getLocal('money')||'',
  },
  mutations: {
    setId(state,val){
      cc.setLocal('id',val);
      state.id=val;
    },
    setUsername(state,val){
      cc.setLocal('username',val)
    },
    setMoney(state,val){
      cc.setLocal('money',val)
    }
  },
  actions: {

  }
})
