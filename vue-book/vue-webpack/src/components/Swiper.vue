<template>
  <!--swiper swiper-slide是全局组件 不需要注册 -->
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,index) in swiperSlides" :key="index">
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
    data() {
      return {
        swiperOption: {
          loop: true, //循环滚动
          setWrapperSize: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
        },
        swiperSlides: [
          'https://m.360buyimg.com/mobilecms/s720x322_jfs/t6655/323/2661018489/125354/5e49b089/59659ac4N9938db6b.jpg!q70.jpg',
          'https://img1.360buyimg.com/da/jfs/t6103/118/4509399937/145404/6ffca242/59658063N0806a814.jpg',
          'https://img1.360buyimg.com/da/jfs/t6703/51/2064932394/202913/5de1af51/595d9c25Nddb716ba.jpg'
        ]
      }
    },
  }
</script>
