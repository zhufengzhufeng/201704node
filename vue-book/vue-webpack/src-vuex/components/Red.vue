<template>
    <div>
      红色 {{color}} {{a}} {{msg}}
      <button @click="changeColor">变红</button>
      {{computeColor}}
    </div>
</template>
<script>
  //辅助函数 简化写法
    import {mapState,mapMutations,mapGetters} from 'vuex';
    export default {
        data(){
            return {}
        },
      //计算属性 this.$store,虽然是属性 但是写法是函数
        computed:{
          msg(){
            return '我很帅'
          },
          ...mapState(['color','a']),
          ...mapGetters(['computeColor'])
        },
        components: {},
        methods: {
          ...mapMutations(['change']),
          changeColor(){
              this.change('red');
          }
        }
    }
</script>
<style scoped>

</style>
