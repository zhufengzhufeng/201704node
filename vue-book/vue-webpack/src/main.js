
import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入公有样式
import './assets/css/index.less'

new Vue({
  el: '#app',
  router,
  ...App
});
