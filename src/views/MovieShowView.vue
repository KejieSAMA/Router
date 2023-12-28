<script setup>

import HeaderTop from "@/components/HeaderTop.vue";
</script>

<template>
    <HeaderTop :param="param"/>
    <div>现在是MovieShowView</div>
</template>

<style scoped>
.movieHomeView-Item{
    display: flex;
    margin: 50px 182px;
}
</style>

<script>
export default {
  data() {
    return {
      param: 'isMovieShow'
    }
  }
}
</script>