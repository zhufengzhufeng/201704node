
import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入公有样式
import './assets/css/index.less'
//引用轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper); //VueAwesomeSwiper会提供两个组件

new Vue({
  el: '#app',
  router,
  ...App
});
