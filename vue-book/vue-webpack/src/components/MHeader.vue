<template>
    <div class="header">
       {{title}}
    </div>
</template>
<script>
    export default {
        props:{ //通过props接收的属性 都会挂载在当前实例上
           title:{
               type:String,
               //required:true,
               //default:'我很帅',
               /*validator:function (val) {
                  return val.length<1;返回false验证失败
               }*/
           }
        },
        data(){
            return {}
        },
        computed: {},
        components: {},
        methods: {}
    }
</script>
<style scoped>
.header{height: 40px; text-align: center;line-height: 40px;background: #f1f1f1;position: fixed;top:0;left: 0;z-index: 10;width: 100%}
</style>
