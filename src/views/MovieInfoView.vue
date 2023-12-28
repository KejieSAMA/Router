<script setup>

import HeaderTop from "@/components/HeaderTop.vue";
</script>

<template>
    <HeaderTop />
    <div>
        <MovieInfo :getInfoId="movieId" />
    </div>
</template>
  
<script>
import MovieInfo from '@/views/MovieInfo/MovieInfo.vue'
/* const { getMovieInfoTest } = require('../api/movieInfo') */

export default {
    name: 'HomeView',
    components: {
        MovieInfo
    },
    data() {
        return {
            movieId: 'null',
            test: {}
        }
    },
    created() {
        this.getRouterData()
    },
    methods: {
        getRouterData() {
            this.movieId = this.$route.query.movieId
        },
    }

}
</script>