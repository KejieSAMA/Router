<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="today-list">
        <div class="today-top">
            <span>今日票房</span>
        </div>
        <a class="todayTop1">
            <svg t="1697264023246" class="today-topicon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="4193" width="20" height="20">
                <path
                    d="M329.537536 974.66368c-16.703488 0-28.827648-10.559488-28.827648-25.110528 0-17.2544 14.944256-25.114624 28.827648-25.114624h156.223488v-99.284992l-4.75136-0.507904c-45.815808-4.907008-91.35104-20.62336-131.678208-45.449216-40.183808-24.737792-74.543104-58.099712-99.362816-96.487424l-1.37216-2.123776-2.514944-0.274432c-48.666624-5.322752-100.335616-27.869184-128.569344-56.102912l-1.55648-1.558528h-0.223232C80.719872 586.58816 61.44 538.963968 61.44 488.48896v-188.399616c0-15.757312 12.82048-28.577792 28.577792-28.577792h110.190592V140.771328c0-15.757312 12.93312-28.577792 28.827648-28.577792h565.676032c16.289792 0 29.048832 12.552192 29.048832 28.577792v130.742272l109.971456 0.002048c15.896576 0 28.827648 12.82048 28.827648 28.577792v188.401664c0 51.05664-19.881984 99.223552-55.984128 135.632896l-1.869824 1.626112-0.108544 0.106496c-27.8528 27.203584-78.678016 49.088512-126.470144 54.458368l-2.504704 0.282624-1.368064 2.115584c-24.788992 38.354944-59.17696 71.718912-99.442688 96.485376-40.357888 24.82176-85.864448 40.54016-131.600384 45.451264l-4.749312 0.509952v99.282944h156.002304c13.991936 0 29.05088 7.860224 29.05088 25.114624 0 16.484352-14.614528 25.110528-29.05088 25.110528H329.537536z m-49.537024-341.051392c44.726272 83.88608 140.06272 142.46912 231.862272 142.46912 91.715584 0 187.312128-58.6752 232.476672-142.688256l0.202752-0.376832 0.509952-1.47456c17.903616-34.469888 27.762688-72.931328 28.512256-111.230976l0.002048-357.892096H250.683392v355.383296c0.483328 40.433664 9.969664 78.80704 28.194816 114.0736l0.137216 0.268288 0.985088 1.468416z m543.760384-113.635328c-0.806912 32.270336-5.61152 66.172928-12.849152 90.65472l-3.465216 11.718656 10.938368-5.451776c12.562432-6.264832 42.88512-21.88288 53.071872-31.56992l1.55648-1.558528c25.36448-26.415104 39.323648-60.246016 39.323648-95.279104l-0.002048-167.00416h-88.569856v198.490112zM151.138304 583.673856c9.560064 10.063872 38.232064 25.137152 54.474752 33.226752l10.82368 5.390336-3.342336-11.620352c-7.247872-25.206784-12.066816-59.160576-12.888064-90.8288l0.002048-198.352896H111.665152v167.002112c0 35.907584 13.64992 68.820992 39.473152 95.182848z"
                    p-id="4194" fill="#d81e06"></path>
                <path
                    d="M511.997952 264.593408l57.004032 115.503104 127.465472 18.520064-92.235776 89.905152 21.774336 126.947328L512 555.532288l-114.008064 59.936768 21.774336-126.947328-92.23168-89.905152 127.463424-18.520064 56.999936-115.503104z"
                    p-id="4195" fill="#d81e06"></path>
            </svg>
            <img src="https://p0.pipi.cn/friday/9881236650032a9e0e34189011c06c2c.jpeg?imageView2/1/w/120/h/80" alt="">
            <div class="todayTop1Item">
                <div class="todayNamefont">坚如磐石</div>
                <div class="todayMoiveCout">2002.08万</div>
            </div>
        </a>
        <a v-for="item in todayMoveList" class="today-item"  href="" >
            <div class="todayName">
                <div v-if="item.top <= 3" class="todayTopfont">{{ item.top }}
                </div>
                <div v-else class="todayTopfont2">{{ item.top }}

                </div>
                <div class="todayNamefont">{{ item.name }}</div>

            </div>
            <div>{{ item.cout }}</div>
        </a>
    </div>
</template>
<style scoped>
.today-topicon {
    position: absolute;
}

.todayTop1 {
    margin-top: 15px;
    margin-bottom: 5px;
    display: flex;
    width: 100%;
    height: 80px;
    border: 0.5px solid #e6e6e6;
}

.todayTop1Item {
    padding: 10px 10px;
    justify-content: space-around;
    display: flex;
    flex-direction: column;
}

.todayMoiveCout {
    color: red;
}

.moveList {
    width: 360px;
    display: flex;
    flex-direction: column;
}

.today-list {
    width: 360px;
    display: flex;
    flex-direction: column;
}

.today-top {
    
    text-align: left;
    font-size: 26px;
    color: red;
}

.today-item {
    
    display: inline-block;
    text-decoration: none;
    margin: 4px 0px;
    padding: 16px 0px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.today-item:hover{
    background-color: hsla(0, 0%, 78%, 0.2);
}

.todayName {
    display: flex;
}

.todayTopfont {
    padding-right: 20px;
    font-size: 18px;
    font-style: italic;
    color: red;
}

.todayTopfont2 {
    padding-right: 20px;
    font-size: 18px;
    font-style: italic;
    color: #999;
}

.todayNamefont {
    display: inline-block;
    max-width: 190px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 17px;
    color: #333;
    vertical-align: top;
}
</style>
<script>

const todayMoveList = [
    {
        top: 2,
        name: '志愿军: 雄兵出击',
        cout: 3333333
    },
    {
        top: 3,
        name: '前任4: 英年早婚',
        cout: 3333333
    },
    {
        top: 4,
        name: '莫斯科行动',
        cout: 3333333
    },
    {
        top: 5,
        name: '汪汪队立大功大电影',
        cout: 3333333
    }
]
export default {
    data() {
        return {
            todayMoveList,
        }
    }
}
</script>