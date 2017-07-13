<template>
    <div class="list page">
      <MHeader title="列表页"/>
      <scroller class="scroll">
      <ul>
        <li v-for="book in books">
          <img :src="book.bookCover" alt="">
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
        created(){
          getBookList().then(res=>{
            this.books = res.data;
          });
        },
        computed: {},
        components: {MHeader},
        methods: {}
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
