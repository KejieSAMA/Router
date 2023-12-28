<script setup>

import HeaderTop from "@/components/HeaderTop.vue";
</script>

<template>
    <HeaderTop :param="param"/>
    <div>现在是CinemaView</div>
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
      param: 'isCinemaView'
    }
  }
}
</script>