<script setup>
import DisplayMoviesVue from "./MovieHome/DisplayMovies.vue";

import MovieList from '../components/MoveList.vue'

import HeaderTop from "@/components/HeaderTop.vue";
</script>

<template>
    <HeaderTop :param="param"/>
    <div class="movieHomeView-Item">
        <DisplayMoviesVue />
        <MovieList />
    </div>
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
      param: 'isMovieHome'
    }
  }
}
</script>