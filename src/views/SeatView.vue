<script setup>
import IconSeat from "../icon/IconSeat.vue"
</script>

<template>
    <div>
        <div v-for="(item, i) in schedule.seatInfo" :key="item" class="SeatBox">
            第-{{ i }}-排
            <div v-for="index in item" :key="index">
                <IconSeat v-if="index == 0" :color="iconColor" :size="iconSize"></IconSeat>
                <IconSeat v-else-if="index == 1" :color="iconColorBlue" :size="iconSize"></IconSeat>
            </div>
        </div>
    </div>
</template>

<style scoped>
.SeatBox {
    display: flex;
    margin: 30px;
}

.SeatBox>div {
    margin: 0px 20px;
}
</style>


<script>

import axios from 'axios'
/* const arr = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
] */
export default {
    data() {
        return {
            schedule: {},
            iconColor: 'gray', // 定义图标颜色，默认为红色
            iconColorBlue: 'blue', // 定义图标颜色，默认为红色
            iconSize: '24px', // 定义图标大小，默认为24像素
        };
    },
    mounted() {
        this.getInfo()
    },
    methods: {
        async getInfo() {
            await axios({
                method: 'post',
                url: 'http://localhost:8000/cinema/getSchedule',
                data: {
                    hashID: this.$route.query.hashID
                }
            }).then((res) => {
                this.schedule = res.data.result
            })
            this.schedule.seatInfo = JSON.parse(this.schedule.seatInfo)
        },
    }
};
</script>