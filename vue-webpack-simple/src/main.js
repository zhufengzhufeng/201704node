import Vue from 'vue'
import App from './App.vue'


new Vue({
  el: '#app',
  render:a=>a(App),
  /*render:function (createElement) {
     return  createElement(App)
  }*/
})
