import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList:[]
  },
  mutations: {
    //实时订单
    orderChange(state, list){
      state.orderList = list
    }
  },
  actions: {
  },
  modules: {
  }
})
