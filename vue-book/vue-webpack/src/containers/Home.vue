<template>
    <div class="page">
      <!--动态的变量 m-top  MTop-->
      <MHeader title="首页">
        <!--具名 slot-->
       <!-- 123213
        <div slot="pagination">你好</div>
        <div slot="b">不好</div>
        123
        123123-->

      </MHeader>
      <div class="content-scroll">
          <Swiper></Swiper>
      </div>
    </div>
</template>
<script>
    import MHeader from '../components/MHeader.vue';
    import Swiper from '../components/Swiper.vue';
    import {getSliders} from '../api'
    export default {
        //声明周期 beforeCreate created beforeMount mounted beforeUpdate updated beforeDestroy destroyed
        data(){
            return {}
        },
        created(){
          getSliders().then(res=>{
              console.log(res);
          });
        },
        computed: {},
        components: {MHeader,Swiper},
        methods: {}
    }
</script>
<style scoped>

</style>
