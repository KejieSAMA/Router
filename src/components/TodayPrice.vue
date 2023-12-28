<template>
    <div class="todayPrice">
            <div class="todayPrice-left">今日大盘</div>
            <div class="todayPrice-item">
                <div class="todayPrice-item-top">
                    <div class="todayPrice-item-All">
                        <div class="todayPriceAll">2222</div>
                        <div class="todayPriceAll2">万</div>
                    </div>
                    <a href="" class="todayPriceView">查看更多></a>
                </div>
                <div class="todayTimeItem">北京时间xxxx</div>
            </div>
        </div>
</template>
<style scoped>
.todayTimeItem{
    
    text-align: left;
    color: #999;
    font-size: 14px;
    padding-left: 15px;
    margin-top: 2px;
}
.todayPriceView{
    padding-top: 4px;
    font-size: 16px;
    color: #ef4238;
}
.todayPriceAll{
    font-weight: bold;
    padding-left: 15px;
    font-size: 30px;
    color: #ef4238;
}
.todayPriceAll2{
    padding-top: 18px;
    font-size: 14px;
    color: #ef4238;
}
.todayPrice-item-top{
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
}
.todayPrice-item {
    width: 100%;
    display: flex;
    flex-direction: column;
}
.todayPrice-item-All{
    display: flex;

}
.todayPrice-left {
    padding: 12px 12px;
    font-size: 18px;
    width: 42px;
    line-height: 20px;
    color: #e6e6e6;
    background-color: red;
}

.todayPrice {
    display: flex;
    margin-top: 20px;
    width: 100%;
    border: 0.5px solid #e6e6e6;
}
</style>