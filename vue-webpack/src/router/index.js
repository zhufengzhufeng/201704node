import Vue from 'vue'
import Router from 'vue-router';// vue的第三方插件
import Hello from '@/components/Hello'

Vue.use(Router); //使用vue-router插件

export default new Router({
  routes: [ //规则 路由的规则
    {
      path: '/',
      component: Hello
    }
  ]
})
