import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import cc from './assets/js/cc'


export default new Vuex.Store({
  state: {
    id:cc.getLocal('id')||'',
    name:cc.getLocal('name')||'',
    money:cc.getLocal('money')||'',
    token:cc.getLocal(`token`)||``,
    face:cc.getLocal('face')||``,
  },
  mutations: {
    setId(state,val){
      cc.setLocal('id',val);
      state.id=val;
    },
    setName(state,val){
      cc.setLocal('name',val);
      state.name=val
    },
    setMoney(state,val){
      cc.setLocal('money',val);
      state.money=val;
    },
    setToken(state,val){
      cc.setLocal(`token`,val);
      state.token=val;
    },
    setFace(state,val){
      cc.setLocal(`face`,val);
      state.face=val;
    },
  },
  actions: {

  }
})
