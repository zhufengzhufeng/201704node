import Vue from 'vue';
import App from './App.vue';

//使用vuex插件，帮我们解决跨组件传递数据
import Vuex from 'vuex';
Vue.use(Vuex);
//每一个规则都是一个函数，函数第一个参数就是状态
const mutations = {
  change(state,n){
    state.color = n;
  },
};
const state = { //状态，将所有的状态统一放到state中
  color:'red',
  a:'1'
};
//计算状态的
const getters = {
  computeColor(state){ //根据状态计算新属性
    return state.color+'black';
  }
};
let store = new Vuex.Store({
  state,
  mutations, //管理状态
  getters
});

new Vue({
  ...App,
  store, //会在实例上生成一个属性 this.$store
}).$mount('#app');
