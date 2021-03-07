import Vue from 'vue'
import vuelidate from 'vuelidate'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'
import store from './store'
import { createNamespacedHelpers } from 'vuex'

Vue.config.productionTip = false
Vue.use(vuelidate)
Vue.use(VueResource)

new Vue({
  router,
  store,
  render: h => h(App),

  created(){
  if (localStorage.getItem('user')) {
      this.$store.commit('login', true)
     
  }
  this.$store.dispatch('getArticles')
    

  }
}).$mount('#app')
