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

import VueLazyLoad from 'vue-lazyload';
import loading from './assets/logo.png'; //本地需要导入图片使用


Vue.use(VueLazyLoad, {
  loading: loading,//加载是显示的loding图，提供了一个全局 指令 v-lazy 将真实的路径放到v-lazy上即可
});

import store from './vuex'
new Vue({
  el: '#app',
  router,
   ...App,
  store
  /*template:'<App/>',
  components:{App}*/
});
