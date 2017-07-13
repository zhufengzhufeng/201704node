<template>
    <div>
      蓝色 {{c}}
      <button @click="changeColor">变蓝</button>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        data(){
            return {}
        },
        computed: {
          ...mapState({c:'color',a:'a'}),
          //...mapState(['color'])
        },
        components: {},
        methods: {
            //不允许组件直接更改状态
          changeColor(){
              this.$store.commit('change','blue')
              //this.$store.state.color = 'blue';
          }
        }
    }
</script>
<style scoped>

</style>
