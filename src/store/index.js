import account from './account/index'
import Vuex from 'vuex'
import Vue from 'vue'
import * as type from './account/type'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count2: 0
  },
  mutations: {
    [type.ACCOUNT_GLOBAL_SET_NUMBER](state, nums) {
      state.count2 += nums;
    }
  },
  modules: {
    account
  }
})

export default store