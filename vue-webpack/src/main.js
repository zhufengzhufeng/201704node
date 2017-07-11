import Vue from 'vue'
import App from './App.vue';//App就是跟组件
import router from './router';//index.js的文件可以省略
//如果选择的是runtime-only 只支持render函数
new Vue({
  el: '#app',
  router,
  ...App, //App组件中自带render函数 直接解构即可
  //render:h=>h(App) //render方法可以将对象 渲染成真实dom
  /*
   template: '<App/>',
   components: { App }*/
});
