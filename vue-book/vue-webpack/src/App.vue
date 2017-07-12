<template>
  <div id="app">
    <router-view></router-view>
    <tab></tab>
  </div>
</template>
<script>
  //引入导航组件
import Tab from './components/Tab.vue';
export default {
  components:{
    Tab
  }
}
</script>
<style>

</style>
