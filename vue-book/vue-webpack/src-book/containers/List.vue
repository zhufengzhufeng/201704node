<template>
    <div class="list page">
      <MHeader title="列表页"/>
      <scroller
        class="scroll"
        :on-refresh="getData"
        :on-infinite="getListByPage"
        ref="scroll"
      >
      <ul>
        <li v-for="book in books">
          <img v-lazy="book.bookCover" alt="">
          <div>
            <h3>{{book.bookName}}</h3>
            <p>{{book.bookInfo}}</p>
          </div>
        </li>
      </ul>
      </scroller>
    </div>
</template>
<script>
    // 组件使用的三部曲 引入 注册  标签形式使用
    import MHeader from '../components/MHeader.vue';
    import {getBookList} from '../api';
    export default {
        data(){
            return {books:[]}
        },
        /*created(){
          this.getData();
        },*/
        computed: {},
        components: {MHeader},
        methods: {
            getListByPage(){
              //把以前的和新获取的加到一起显示到页面上
              //这个方法 会默认调用一次
              getBookList().then(res=>{
                  //如果没有更多数据后台应该返回空数组
                //默认页面不会再变长了，而且是true的情况下才表示没有更多数据了
                  this.books = [...this.books,...res.data];
                  //获取数据后，要告诉下一次是否还有更多
                  this.$refs.scroll.finishInfinite(false);
                  //必须第一步满足 有一屏,如果没有 看是否有更多数据 有的话会继续加载，没有就停止了
              })
            },
            getData(){
              getBookList().then(res=>{
                this.books = res.data;
                console.log(this.$refs);
                //过一秒后 停止刷新
                setTimeout(()=>{
                  this.$refs.scroll.finishPullToRefresh();
                },500);

              });
            }
        }
    }
</script>
<style scoped lang="less">
.list  {
  .scroll{top:40px;bottom: 50px;height: auto}
  li{
    display: flex;
    height: 160px;
    border-bottom: 1px solid #ccc;
    align-items: center;
    div{height: 150px;margin-left: 10px}
    img{
      height: 150px;
      width: 108px;
    }
  }
}
</style>
