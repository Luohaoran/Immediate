<template>
    <div>
        <Top title="流水记录"/>
        <div class="content">
            <div class="menu">
                <div v-for="(item,index) in menuList"
                     :key="index"
                     :class="{on:menuIndex===index}"
                     @click="menuCheck(index)"
                     class="menu-item">
                    <img :src="item.img" alt="">
                    <div class="title">{{item.text}}</div>
                </div>
            </div>
            <div class="record-box">
                <div class="tuiguang-box" v-show="menuIndex===0">
                    <div class="top-message">
                        <div class="left">
                            <div>今日推广</div>
                            <div>12人</div>
                        </div>
                        <div class="right">
                            <div>我的下级</div>
                            <div>12人</div>
                        </div>
                    </div>
                    <div class="record-table">
                        <div class="table-title">
                            <div>昵称</div>
                            <div>流水</div>
                            <div>佣金</div>
                            <div>时间</div>
                        </div>
                        <div class="table-body">
                            <div class="item-box">
                                <div class="table-item" v-for="n in 4">{{n}}</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="geren-box" v-show="menuIndex===1">
                    <div class="top-message">
                        <div class="left">
                            <div>今日流水</div>
                            <div>12元</div>
                        </div>
                        <div class="right">
                            <div>流水总额</div>
                            <div>12元</div>
                        </div>
                    </div>
                    <div class="record-table">
                        <div class="table-title">
                            <div>游戏id</div>
                            <div>下注/抢</div>
                            <div>盈亏</div>
                            <div>时间</div>
                        </div>
                        <div class="table-body">
                            <div class="item-box">
                                <div class="table-item" v-for="n in 4">{{n}}</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="fanshui-box" v-show="menuIndex===2">
                    <div class="top-message">
                        <div class="left">
                            <div>今日反水</div>
                            <div>12元</div>
                        </div>
                        <div class="right">
                            <div>反水总额</div>
                            <div>12元</div>
                        </div>
                    </div>
                    <div class="record-table">
                        <div class="table-title">
                            <div>反水金额</div>
                            <div>流水</div>
                            <div>到账时间</div>

                        </div>
                        <div class="table-body">
                            <div class="item-box" v-for="n in 10" :key="n">
                                <div class="table-item" v-for="n in 3 " :key="n">{{n}}</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Top from '../components/Top'

    export default {
        name: "Bill_record",
        components: {
            Top
        },
        data() {
            return {
                menuIndex: 0,
                menuList: [
                    {
                        text: '推广收益',
                        img: require('../assets/img/tuiguang.png')
                    },
                    {
                        text: '个人流水',
                        img: require('../assets/img/geren.png')
                    },
                    {
                        text: '反水记录',
                        img: require('../assets/img/fanshui.png')
                    }
                ]
            }
        },


        beforeRouteEnter(to, from, next) {
            next()
        },
        beforeRouteLeave(to, from, next) {
            next()
        },
        created() {

        },
        mounted() {

        },
        methods: {
            menuCheck(index) {
                this.menuIndex = index;

            }
        },

    }

</script>

<style scoped lang="less">
    .content {
        width: 100%;

        .menu {
            height: 9%;
            display: flex;
            justify-content: space-around;
            align-items: center;

            .menu-item {
                width: 33.3%;
                height: 100%;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                justify-content: space-around;

                .title {
                    text-align: center;
                    width: 100%;
                }

                img {
                    width: 30px;
                    height: 35px;
                }
            }

            .on {
                background-color: rgb(237, 237, 237);
            }
        }

        .record-box {
            height: 91%;
            /*background-color: #666666;*/

            .tuiguang-box, .geren-box, .fanshui-box {
                width: 100%;
                height: 100%;
                .top-message{
                    height: 15%;
                    width: 100%;
                    background-color: rgb(226,226,226);
                    display: flex;
                    .left,.right{
                        display: flex;
                        flex-wrap: wrap;
                        width: 50%;
                        height: 100%;
                        div{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 100%;
                        }
                    }
                }
                .record-table{
                    height: 85%;
                    width: 100%;
                    background-color: #2c3e50;
                    .table-title{
                        width: 100%;
                        height: 8%;
                        background-color: rgb(237,237,237);
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                    }
                    .table-body{
                        height: 92%;
                        width: 100%;
                        background-color: white;
                        overflow-y: scroll;
                        .item-box{
                            border-bottom: 1px solid #999999;
                            height: 10%;
                            width: 100%;
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                        }
                    }
                }
            }
        }
    }

</style>
