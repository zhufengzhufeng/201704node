<template>
  <div id="app">
    <transition name="translate">
      <!--增加缓存 -->
        <router-view class="pos"></router-view>
    </transition>
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
<style scoped>
/*进入之前的位置*/
.translate-enter{
  transform: translate(100%);
}
/*开始进入*/
.translate-enter-active{
  transition: all .3s linear;
}
/*离开状态*/
.translate-leave-active{
  transform: translate(-100%);
  transition: all .3s linear;
}
.pos{
  position: absolute;top:0;left: 0;width: 100%
}
</style>
