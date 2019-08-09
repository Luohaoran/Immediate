import Vue from 'vue'
import Vuex from 'vuex'

import cc from './assets/js/cc'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id:cc.getLocal('id')||'',
    username:cc.getLocal('username')||'',
    money:cc.getLocal('money')||'',
    token:cc.getLocal(`token`)||``,
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
    },
    setToken(state,val){
      cc.setLocal(`token`,val)
    }
  },
  actions: {

  }
})
