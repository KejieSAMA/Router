<script setup>
import TodayList from './TodayList.vue'
import TodayPrice from './TodayPrice.vue'
import ExpectList from './myExpectList.vue'
</script>

<template>
    <div class="moveList">
        <TodayList />
        <TodayPrice />
        <ExpectList />
    </div>
</template>
<style scoped>
.moveList {
    width: 360px;
    display: flex;
    flex-direction: column;
}
</style>
<script>
export default {
    data() {
        return {
        }
    }
}
</script>