<script setup>
import IconSeat from "../icon/IconSeat.vue"
</script>

<template>
    <div>
        <div v-for="(item, i) in schedule.seatInfo" :key="item" class="SeatBox">
            第-{{ i }}-排
            <div v-for="(index, j) in item" :key="index">
                <IconSeat v-if="index == 0" :color="getColor(i, j)" :size="iconSize" @click="changeColor(i, j)"></IconSeat>
                <IconSeat v-else-if="index == 1" :color="getColor(i, j)" :size="iconSize" @click="changeColor(i, j)">
                </IconSeat>
            </div>
        </div>
        <div @click="changeSeatInfo()">确定购票</div>
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
            iconSize: '24px', // 定义图标大小，默认为24像素
            i: 0
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
        getColor(rowIndex, colIndex) {
            return this.schedule.seatInfo[rowIndex][colIndex] == 0 ? 'gray' : 'blue';
        },
        changeColor(rowIndex, colIndex) {
            if (this.schedule.seatInfo[rowIndex][colIndex] == 1) {
                this.schedule.seatInfo[rowIndex][colIndex] = 0
                this.i--
            } else {
                if (this.i == 6) {
                    alert('您已选择了六个，无法再选择')
                    return
                }
                this.schedule.seatInfo[rowIndex][colIndex] = 1
                this.i++
            }
        },
        async changeSeatInfo() {
            await axios({
                method: 'post',
                url: 'http://localhost:8000/cinema/changeScheduleInfo',
                data: {
                    hashID: this.$route.query.hashID,
                    SeatInfo: JSON.stringify(this.schedule.seatInfo)
                }
            })
            alert('购买成功')
            window.location.reload()
        }
    }
};
</script>