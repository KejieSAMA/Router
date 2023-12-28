<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="expectList">
            <div class="expectList-top">
                <div class="expectList-top-left">最受期待</div>
                <a class="expectList-top-right">查看完整榜单></a>
            </div>
            <div class="expectList-top1">
                <img src="https://p0.pipi.cn/mmdb/fb73863306dddd178902ff87c2a463233f891.jpg?imageView2/1/w/140/h/194"
                    alt="">
                <a class="expectList-top1-item">
                    <div class="expectList-top1-name">Top1Name</div>
                    <div class="expectList-top1-time">Top1Time : 2021-XX-XX</div>
                    <div class="expectList-top1-cout">Top1cout想看</div>
                </a>
            </div>
            <div class="expectList-top2-3">
                <div class="expectList-top2-3-item">
                    <img src="https://p0.pipi.cn/mmdb/fb73863311edddf0ee50152f90f72a31af565.jpeg?imageView2/1/w/170/h/118"
                        alt="">
                    <a href="" class="expectList-top2-3-title">
                        <div class="expectList-top1-name">Top2Name</div>
                        <div class="expectList-top1-cout">Top2cout想看</div>
                    </a>
                </div>
                <div class="expectList-top2-3-item">
                    <img src="https://p0.pipi.cn/friday/69a13f812a8da52eababcd07da2be5f3.jpg?imageView2/1/w/170/h/118"
                        alt="">
                    <a href="" class="expectList-top2-3-title">
                        <div class="expectList-top1-name">Top3Name</div>
                        <div class="expectList-top1-cout">Top3cout想看</div>
                    </a>
                </div>
            </div>
            <div class="expectList-other">
                <a v-for="item in expectList" href="" class="expectList-other-item">
                    <div class="expectList-other-title">
                        <div class="expectList-other-top">{{ item.Top }}</div>
                        <div class="expectList-other-name">{{ item.name }}</div>
                    </div>
                    <div class="expectList-other-cout">{{ item.cout }}想看</div>
                </a>
            </div>
        </div>
</template>
<style scoped>
.expectList-other-cout{
    padding-top: 2px;
    font-size: 14px;
    color: #ffb400;
}
.expectList-other-name{
    padding-top: 1px;
    font-size: 16px;
    color: #333;
}
.expectList-other-top{
    padding-top: 2px;
    font-size: 18px;
    color: #999;
    font-style: italic;
    padding-right: 8px;
}
.expectList-other-title{
    display: flex;
}
.expectList-other-item:hover{
    background-color: hsla(0, 0%, 66%, 0.2);
}
.expectList-other-item{
    text-decoration: none;
    text-align: left;
    margin-top: 5px;
    padding: 10px 2px;
    display: flex;
    justify-content: space-between;
}
.expectList-top2-3-title {
    text-align: left;
    text-decoration: none;
    padding: 2px 12px;
}

.expectList-top2-3-item {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 170px;
    border: 0.5px solid #e6e6e6;
}

.expectList-top2-3 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}

.expectList-top1-name {
    font-size: 22px;
}

.expectList-top1-time {
    font-size: 16px;
    font-weight: 400;
    color: #999;
}

.expectList-top1-cout {
    font-size: 14px;
    color: #ffb400;
}

.expectList-top1-item {
    
    text-align: left;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 50px 12px;
}

.expectList-top-left {
    font-weight: 400;
    font-size: 26px;
    color: #ffb400
}

.expectList-top-right {
    padding-top: 18px;
    font-size: 14px;
    color: #ffb400
}

.expectList-top-right:hover {
    background-color: white;
    text-decoration: underline
}

.expectList-top {
    display: flex;
    justify-content: space-between;
}

.expectList-top1 {
    margin-top: 10px;
    display: flex;
    width: 100%;
    border: 0.5px solid #e6e6e6;
}

.expectList {
    margin-top: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
}
</style>
<script>
const expectList = [
    {
        Top: 4,
        name: '最好的相遇',
        cout: 666666
    },
    {
        Top: 5,
        name: '我本是最高的山',
        cout: 666666
    },
    {
        Top: 6,
        name: '其他电影',
        cout: 666666
    },
    {
        Top: 7,
        name: '其他电影',
        cout: 666666
    },
    {
        Top: 8,
        name: '其他电影',
        cout: 666666
    },
    {
        Top: 9,
        name: '其他电影',
        cout: 666666
    },
    {
        Top: 10,
        name: '其他电影',
        cout: 666666
    }
]

export default {
    data() {
        return {
            expectList
        }
    }
}
</script>