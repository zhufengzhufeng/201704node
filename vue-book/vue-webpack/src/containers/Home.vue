<template>
    <div class="page">
      <!--动态的变量 m-top  MTop-->
      <MHeader title="首页"></MHeader>
      <div class="content-scroll">
          <Swiper></Swiper>
      </div>
    </div>
</template>
<script>
    import MHeader from '../components/MHeader.vue';
    import Swiper from '../components/Swiper.vue'
    export default {
        data(){
            return {}
        },
        computed: {},
        components: {MHeader,Swiper},
        methods: {}
    }
</script>
<style scoped>

</style>
