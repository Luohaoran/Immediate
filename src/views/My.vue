<template>
    <div>
        <div class="content">
            <div class="my-box">
                <div class="top">
                    <div class="my-img">
                        <img :src="face" alt="">
                    </div>
                    <div class="my-message">
                        <div class="user-name">
                            <div class="title">昵称</div>
                            ：
                            <div class="text">{{username}}</div>
                        </div>
                        <div class="user-id">
                            <div class="title">游戏ID</div>
                            ：
                            <div class="text">{{id}}</div>
                        </div>
                        <div class="user-jine">
                            <div class="title">账户余额</div>
                            ：
                            <div class="text">{{money}}元</div>
                        </div>

                    </div>
                </div>
                <div class="bottom">
                    <button class="on"
                    >充值
                    </button>
                    <button @click="goPut()">提现</button>
                </div>
            </div>
            <div class="item-1">
                <div class="item-cell" @click="go('/AddBank')">
                    <div class="left">
                        <div class="img">
                            <img src="../assets/img/item_1_1.png" alt="">
                        </div>
                        <div class="text">
                            绑定银行卡
                        </div>
                    </div>
                    <div class="right">
                        <img src="../assets/img/item_right.png" alt="">
                    </div>
                </div>
            </div>
            <div class="item-2">
                <div class="item-cell"
                     @click="go(item.url)"
                     v-for="(item,index) in itemList"
                     :key="index">
                    <div class="left">
                        <div class="img">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="text">
                            {{item.text}}
                        </div>
                    </div>
                    <div class="right">
                        <img src="../assets/img/item_right.png" alt="">
                    </div>
                </div>
            </div>
            <!--            <div class="item-3">-->
            <!--                <div class="item-cell" @click="go('/Set')">-->
            <!--                    <div class="left">-->
            <!--                        <div class="img">-->
            <!--                            <img src="../assets/img/item_3_1.png" alt="">-->
            <!--                        </div>-->
            <!--                        <div class="text">-->
            <!--                            设置-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                    <div class="right">-->
            <!--                        <img src="../assets/img/item_right.png" alt="">-->
            <!--                    </div>-->
            <!--                </div>-->

            <!--            </div>-->
        </div>
        <bottom-tab/>
    </div>
</template>

<script>
    import BottomTab from '../components/BottomTab'
    import cc from "../assets/js/cc";
    import {url} from "../request/api/base";

    export default {
        name: "My",
        components: {
            BottomTab,
        },
        data() {
            return {
                face: this.$store.state.face || '',
                username: this.$store.state.username || '',
                money: this.$store.state.money || '',
                id: this.$store.state.id || '',
                itemList: [
                    {
                        text: '我的推广',
                        img: require('../assets/img/item_2_1.png'),
                        url: '/Trend'
                    },
                    {
                        text: '充值记录',
                        img: require('../assets/img/item_2_2.png'),
                        url: '/Recharge_record'
                    },
                    {
                        text: '提现记录',
                        img: require('../assets/img/item_2_3.png'),
                        url: '/Put_record'

                    },
                    {
                        text: '流水记录',
                        img: require('../assets/img/item_2_4.png'),
                        url: '/Bill_record'
                    },
                ]
            }
        },


        beforeRouteEnter(to, from, next) {
            next(vm => {
                if (!cc.getLocal('token')) {
                    if (vm.$route.query.token) {
                        vm.$store.commit('setToken', vm.$route.query.token);
                        vm.$store.commit('setUsername', vm.$route.query.name);
                        vm.username = vm.$route.query.name;
                        vm.$store.commit('setFace', vm.$route.query.face);
                        vm.face = vm.$route.query.face;
                    } else {
                        window.location.href = `http://192.168.8.118:82/api/wx/cookie`;//后端设置cookie
                    }
                }
            });
        },
        beforeRouteLeave(to, from, next) {
            next()
        },
        created() {
            this.getCenter();
        },
        mounted() {

        },
        methods: {
            getCenter() {
                this.$api.center().then(res => {
                    if (res.error_code === 1) {
                        this.$store.commit('setId', res.result.id);
                        this.id = res.result.id;
                        this.$store.commit('setMoney', res.result.money);
                        this.money = res.result.money;
                    } else {
                        this.$utils.Msg(res.msg)
                    }
                });
            },
            goPut() {
                this.$router.push('/Put')
            },
            go(url) {
                this.$router.push(url)
            },
        },

    }

</script>

<style scoped lang="less">
    .content {
        background-color: rgb(237, 237, 237);

        .my-box {
            width: 90%;
            height: 170*2px;
            background-color: white;
            padding: 30px 5%;
            margin-bottom: 20px;

            .top {
                height: 100*2px;
                display: flex;
                align-items: center;

                .my-img {
                    width: 80*2px;
                    height: 80*2px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    overflow: hidden;

                    img {
                        width: 110%;
                    }
                }

                .my-message {
                    margin-left: 30px;

                    .user-name, .user-id, .user-jine {
                        /*font-weight: ;*/

                        .title {
                            width: 150px;
                            text-align-last: justify;
                        }

                        .text {
                            display: flex;
                            align-items: center;
                        }

                        height: 50px;
                        display: flex;
                        /*justify-content: space-between;*/
                    }

                }
            }

            .bottom {
                width: 100%;
                margin: 0 auto;
                margin-top: 1.875rem;
                display: flex;
                justify-content: space-around;

                button {
                    height: 40*2px;
                    background-color: rgb(238, 238, 238);
                    width: 150*2px;
                    border-radius: 10px;
                    color: rgb(26, 173, 25);
                }

                .on {
                    background-color: rgb(26, 173, 25);
                    color: white;
                }
            }
        }

        .item-1, .item-2, .item-3 {
            margin-top: 30px;
            height: 120px;
            width: 100%;
            background-color: white;

            .item-cell {
                width: 90%;
                padding: 0 5%;
                height: 100%;
                border-bottom: 1px solid #a8a8a8;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .left {
                    width: 40%;
                    display: flex;
                    justify-content: space-around;
                    /*align-items: center;*/

                    .img {
                        width: 30%;
                        margin-left: 10px;

                        img {
                            width: 60px;
                            /*height: 60px;*/
                        }
                    }

                    .text {
                        width: 70%;
                        /*text-align-last: justify;*/
                    }
                }

                .right {
                    img {
                        width: 40px;
                        height: 40px;
                    }
                }
            }
        }

        .item-2 {
            height: 120*4px;

            .item-cell {
                height: 120px;
            }
        }

    }
</style>
