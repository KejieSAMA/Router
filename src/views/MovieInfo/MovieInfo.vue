<template>
    <div class="movieItem">
        <div class="movieItem_top">
            <div class="movie_info">
            </div>
            <img :src="movieInfo.movie_img2" alt="" class="movie_img">
            <div class="movie_item">
                <div class="movie_item_left">
                    <div class="movie_item_left_cnName">{{ movieInfo.movie_name }}</div>
                    <div class="movie_item_left_enName">{{ movieInfo.movie_enName }}</div>
                    <div class="movie_item_info_item">
                        <div class="movie_item_left_type">{{ movieInfo.movie_type }}</div>
                        <div class="movie_item_left_countryAndTime">{{ movieInfo.movie_country }} / {{ movieInfo.movie_time
                        }}分钟</div>
                        <div class="movie_item_left_release">{{ movieInfo.movie_release }} 在cn上映</div>
                    </div>
                    <div class="movie_item_left_bottom_button">
                        <div class="movie_item_now_button_item">
                            <button class="movie_item_now_button">想看</button>
                            <button class="movie_item_now_button">评分</button>
                        </div>
                        <router-link :to="{
                            path: '/filetick',
                            query: {
                                getInfoId: movieInfo.id
                            },
                        }" class="movie_button">
                            <button class="movie_item_special_offer">特惠购票</button>
                        </router-link>
                    </div>
                </div>
                <div class="movie_item_right">
                    <div class="movie_item_right_text">想看数</div>
                    <div class="movie_item_right_count">{{ movieInfo.collect }}</div>
                    <div class="movie_item_right_text">累计票房</div>
                    <div class="movie_item_right_price_count">
                        <div class="movie_item_right_price_count_number">{{ movieInfo.movie_priceAll }}
                        </div>
                        <div class="movie_item_right_price_count_string">万
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="movieItem_bottom">
            <div class="movieItem_bottom_left">
                <div>猫眼电影 > 电影 > {{ movieInfo.movie_name }}</div>
                <div class="movieItem_info_button">
                    <a>介绍</a>
                    <a>演职人员</a>
                    <a>奖项</a>
                    <a>图集</a>
                </div>
                <div class="mod_item">
                    <div class="mod_title">|| 剧情简介</div>
                    <div class="mod_info">{{ movieInfo.movie_plot }}</div>
                </div>
                <div class="mod_item">
                    <div class="mod_title">|| 演职人员</div>
                    <div></div>
                </div>
                <div class="mod_item">
                    <div class="mod_title">|| 图集</div>
                    <div></div>
                </div>
                <div class="mod_item">
                    <div class="mod_title">|| 影片资料</div>
                    <div></div>
                </div>
                <div class="mod_item">
                    <div class="mod_title">|| 票房</div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.mod_info {
    width: 700px;
    font-size: 14px;
    line-height: 26px;
}

.mod_item {
    margin-top: 40px;
}

.mod_title {
    display: inline-block;
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: 18px;
    color: #333;
    line-height: 18px;
    margin-bottom: 16px;
}

.movieItem_info_button {
    display: flex;
    flex-direction: row;
    font-size: 18px;
    color: #333;
    margin-top: 20px;
    width: 700px;
    border-bottom: 2px solid #eee;
}

.movieItem_info_button>a {

    padding-bottom: 6px;
    margin-right: 30px;
    border-bottom: 2px solid #ef4238;
}

.movie_item_right_price_count_number {
    font-size: 26px;
}

.movie_item_right_price_count_string {
    font-size: 13px;
    margin-top: 12px;
    margin-left: 2px;
}

.movie_item_right_price_count {
    display: flex;
    font-family: mtsi-font;
    color: white;
    width: 100px;
    text-align: left;
}

.movie_item_right_count {
    font-family: mtsi-font;
    font-size: 30px;
    color: #ffc600;
    width: 100px;
    text-align: left;
}

.movie_item_right_text {
    margin-top: 10px;
    color: white;
    font-size: 12px;
    width: 100px;
    text-align: left;
}

.movie_item_right {
    display: flex;
    flex-direction: column;
    z-index: 999;
    margin-left: 80px;
    margin-top: 150px;
    height: 100px;
    width: 100px;
}

.movie_item_now_button_item {
    display: flex;
    justify-content: space-between;
}

.movie_item_now_button {
    display: block;
    width: 125px;
    background-color: #756189;
    padding: 8px 0px;
    font-size: 14px;
    color: #fff;
    border-radius: 2px;
    border: none;
}

.movie_item_special_offer {
    margin-top: 10px;
    width: 100%;
    height: 40px;
    color: white;
    background-color: #df2d2d;
    font-size: 16px;
    border-radius: 2px;
    border: none;
}

.movie_item_left_bottom_button {
    margin-top: 60px
}

.movie_item_info_item {
    margin-top: 5px;
    line-height: 1.6;
    font-size: 15px;
    text-align: left;
    font-weight: 150;
}

.movie_item_left_cnName {
    font-size: 26px;
    font-weight: 700;
    text-align: left;
}

.movie_item_left_enName {
    width: 260px;
    font-size: 18px;
    line-height: 1.3;
    text-align: left;
}

.movie_item_left {
    color: white;
    display: flex;
    flex-direction: column;
}

.movieItem {
    margin: 50px 182px;
    display: flex;
    flex-direction: column;
}

.movieItem_top {
    display: flex;
}

.movieItem_bottom {
    margin-top: 50px;
    margin-left: -12px;
    display: flex;
    text-align: left;
}

.movie_item {

    display: flex;
    z-index: 999;
    margin-top: 22px;
    margin-left: 25px;
    width: 100px;
    height: 280px;
}

.movie_img {
    position: relative;
    margin-top: 22px;
    margin-left: 15px;
    height: 330px;
    width: 240px;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAAyAgMAAAAfG76+AAAADFBMVEUAAAAAAAAAAAAAAAA16TeWAAAABHRSTlMOAgoGQ0SIeAAAADpJREFUSMdjGAWjYBRgAasoAAwdFACKbB7VPEI076YAUGbzfwrAqOYRormcAjCANodSAEY1j2oexJoBlx1+yE7RXIIAAAAASUVORK5CYII=') no-repeat bottom;
}

.movie_info {
    position: absolute;
    margin-top: -50px;
    margin-left: -390px;
    height: 375px;
    width: 1727px;
    background: #392f59 url('../../assets/movieInfoBack.png') no-repeat 50%;
}
</style>

<script>

import axios from 'axios'

const movieDate = {
    img: 'https://p0.pipi.cn/mmdb/fb73865171fb12b5358077f499f0b4c7f923e.jpg?imageView2/1/w/464/h/644',
}

export default {
    data() {
        return {
            movieDate,
            movieInfo: {},
        }
    },
    props: ['getInfoId'],
    mounted() {
        this.getMovieInfo(this.getInfoId)
    },
    methods: {
        async getMovieInfo(id) {
            await axios({
                method: 'post',
                url: 'http://localhost:8000/movies/getMovieInfo',
                data: {
                    id: parseInt(id)
                }
            }).then((res) => {
                this.movieInfo = res.data.result
                console.log(res.data.result)
            })
        }
    }
}
</script>
