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
          <Swiper :data="sliders"></Swiper>
          <h3>热门图书</h3>
          <!--loading效果-->
          <ul class="hot-list" v-if="hots.length" >
            <li v-for="hot in hots">
              <img :src="hot.bookCover" >
              <p>{{hot.bookName}}</p>
            </li>
          </ul>
         <Loading v-else></Loading>
      </div>
    </div>
</template>
<script>
    import MHeader from '../components/MHeader.vue';
    import Swiper from '../components/Swiper.vue';
    import Loading from '../components/Loading.vue'
    //会默认查找api下index文件
    import {getSliders,getHotBook} from '../api';
    export default {
        //声明周期 beforeCreate created beforeMount mounted beforeUpdate updated beforeDestroy destroyed
        data(){
            return {
                sliders:[],
                hots:[]
            }
        },
        created(){
            //获取轮播图
          getSliders().then(res=>{
              this.sliders = res.data;
          });
            //获取热门图书
          getHotBook().then(res=>{
              this.hots = res.data;
          })
        },
        computed: {},
        components: {MHeader,Swiper,Loading},
        methods: {}
    }
</script>
<style scoped lang="less">
  h3{font-weight: normal;padding-left: 1%}
.hot-list{
  padding: 1%;
  display: flex;
  flex-wrap: wrap;
  li{
    margin-bottom: 10px;
    width: 33.3333333%;
    p{
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    img{width: 100%;height: 150px}
  }
}
</style>
