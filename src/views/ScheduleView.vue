<script setup>

import HeaderTop from "@/components/HeaderTop.vue";
</script>

<template>
    <HeaderTop :param="param" />
    <div class="scheduleBox">
        <div class="schedule-top2">
            <div>放映时间</div>
            <div>语言版本</div>
            <div>放映厅</div>
            <div>售价(元)</div>
            <div>选座购票</div>
        </div>
        <div v-for="item in res" :key="item.id">
            <div v-if="item.id % 2 == 1" class="schedule-top">
                <div>
                    <div class="stTime">{{ item.startTime }}</div>
                    <div class="edTime">{{ item.endTime }}散场</div>
                </div>
                <div class="timeOhter">{{ item.language }}</div>
                <div class="timeOhter">{{ item.hall }}</div>
                <div class="money">{{ item.price }}</div>
                <div class="getTick">
                    <router-link :to="{
                        path: '/file/seat',
                        query: {
                            hashID: item.hashID
                        }
                    }" class="getSeat">
                        选座购票
                    </router-link>
                </div>
            </div>
            <div v-else class="schedule-top2">
                <div>
                    <div class="stTime">{{ item.startTime }}</div>
                    <div class="edTime">{{ item.endTime }}散场</div>
                </div>
                <div class="timeOhter">{{ item.language }}</div>
                <div class="timeOhter">{{ item.hall }}</div>
                <div class="money">{{ item.price }}</div>
                <div class="getTick">选座购票</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.getSeat {

    text-decoration: none;
    color: #fff;
}

.getTick {
    text-decoration: none;
    display: inline-block;
    padding: 2px 12px;
    height: 30px;
    color: #fff;
    background-color: #f03d37;
    font-size: 14px;
    line-height: 30px;
    border-radius: 100px;
    text-align: center;
    box-shadow: 0 2px 10px -2px #f03d37;
}

.stTime {
    font-size: 18px;
    color: #333;
    font-weight: 700;
}

.edTime {
    font-size: 12px;
    color: #999;
}

.scheduleBox {
    width: 1160px;
    margin: 60px 160px;
}

.schedule-top {
    justify-content: space-around;
    display: flex;
}

.schedule-top2 {
    background-color: #f7f7f7;
    justify-content: space-around;
    display: flex;
}

.schedule-top>div {
    margin: 16px 0px;
    text-align: center;
}

.schedule-top2>div {
    margin: 16px 0px;
    text-align: center;
}

.timeOhter {
    padding-top: 8px;
}

.money {
    padding-top: 10px;
    font-size: 18px;
    color: #f03d37;
    font-weight: 700;
}
</style>

<script>
import CryptoJS from 'crypto-js';
// eslint-disable-next-line no-unused-vars
import axios from 'axios'

export default {
    data() {
        return {
            param: 'isCinemaView',
            scheduleInfo: {},
            i: 0,
            res: [],
        }
    },
    props: ['getInfoId'],
    mounted() {
        this.getInfo()
    },
    methods: {
        async decrypt(str) {
            const Key = 'my-secret-key';
            const decrypted = CryptoJS.AES.decrypt(str, Key);
            this.scheduleInfo = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8))
        },
        async movieScheduleInfo(hashId) {
            await axios({
                method: 'post',
                url: 'http://localhost:8000/cinema/getSchedule',
                data: {
                    hashID: hashId
                }
            }).then((res) => {
                this.res.push(res.data.result)
            })
        },
        async getInfo() {
            await this.decrypt(this.$route.query.data)
            for (const item in this.scheduleInfo.time) {
                await this.movieScheduleInfo(this.scheduleInfo.time[item])
            }
            console.log(this.res)
        },

    }
}
</script>
