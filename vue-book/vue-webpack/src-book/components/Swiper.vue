<template>
  <!--swiper swiper-slide是全局组件 不需要注册 -->
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,index) in data" :key="index">
      <img :src="slide">
    </swiper-slide>
    <!--slot插槽 会将对应的内容 插到对应的部分-->
    <div class="swiper-pagination" slot="pagination">
    </div>
  </swiper>
</template>
<style scoped>
  img{width: 100%}
</style>
<script>
  export default {
    name: 'carrousel',
    props:{
        data:{
            type:Array
        }
    },
    data() {
      return {
        swiperOption: {
          loop: true, //循环滚动
          setWrapperSize: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
        }
      }
    },
  }
</script>
