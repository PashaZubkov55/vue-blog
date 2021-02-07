<template>
  <div id="app">
    <component :is = Layout>
       <router-view/>
    </component>
   
  </div>
</template>

<style>
</style>

<script>
import EmptyLayout from './layouts/EmptyLayout'
import MainLayout from './layouts/MainLayout'

export default {
  computed:{
    Layout() {
      return (this.$route.meta.layout || 'empty') + '-Layout'

    }
  },
  components:{
    EmptyLayout,
    MainLayout,
  }
}
</script>
<style>
@import './assets/style.css';
</style>
