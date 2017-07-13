import Vue from 'vue';//引入vue
import App from './App.vue';//根组件
import router from './router';//不同的路径匹配出不同的内容

//引入公有样式，很多页面都用的是公有样式
import './assets/css/index.less'
//引用轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper); //VueAwesomeSwiper会提供两个组件


import VueScroller from 'vue-scroller';
Vue.use(VueScroller); //会注册一个全局组件 scroller

new Vue({
  el: '#app',
  router,
   ...App
  /*template:'<App/>',
  components:{App}*/
});
