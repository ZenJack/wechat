import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: {}
  },
  mutations: {
    getAccount: state => state.account,
    setAccount: (state, account) => {
      state.account = account
    }
  }
})
