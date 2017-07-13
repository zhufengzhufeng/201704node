<template>
    <nav class="footer">
      <router-link to="/home">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/list">
        <i class="iconfont icon-list"></i>
        <span>列表</span>
      </router-link>
      <router-link to="/collect">
        <i class="iconfont icon-shouc01"></i>
        <span>收藏</span>
      </router-link>
      <router-link to="/add">
        <i class="iconfont icon-54"></i>
        <span>增加</span>
      </router-link>
    </nav>
</template>
<script>
    export default {
        data(){
            return {}
        },
        computed: {},
        components: {},
        methods: {}
    }
</script>
<style scoped lang="less">
  .footer{
    position: fixed;
    bottom: 0;
    left:0;
    width: 100%;
    height: 50px;
    display: flex;
    z-index: 10;
    background: #f1f1f1;
    border-top: 1px solid #ccc;
    .active{color:orange}
    a{
      i{font-size: 20px}
      display: flex;
      flex-direction: column;
      align-items: center;//横向
      justify-content: center;//纵向
      flex:1;
    }
  }
</style>
