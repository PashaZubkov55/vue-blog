import Vue from 'vue'
import Vuex from 'vuex'
import users from './users'
import articles from './articles'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    users,
    articles,
  }
  /*
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
  */
})
