<template>
    <div class="page">
      <MHeader title="收藏列表"></MHeader>
      <div class="content-scroll">
        {{collect}}
      </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import MHeader from '../components/MHeader.vue'
    export default {
        data(){
            return {}
        },
        computed: {
            ...mapState(['collect'])
        },
        components: {MHeader},
        methods: {}
    }
</script>
<style scoped></style>
