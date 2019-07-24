<template>
    <div>
        <div class="content">
            <div class="my-box">
                <div class="top">
                    <div class="my-img">
                        <img src="../assets/img/my-img.png" alt="">
                    </div>
                    <div class="my-message">
                        <div class="user-name">
                            <div class="title">昵称</div>
                            ：
                            <div class="text">天长地久</div>
                        </div>
                        <div class="user-id">
                            <div class="title">游戏ID</div>
                            ：
                            <div class="text">688565</div>
                        </div>
                        <div class="user-jine">
                            <div class="title">账户余额</div>
                            ：
                            <div class="text">666元</div>
                        </div>

                    </div>
                </div>
                <div class="bottom">
                    <button class="on"
                    >人工充值
                    </button>
                    <button
                    >扫码充值
                    </button>
                </div>
            </div>
            <div class="item-1">
               <div class="item-cell" @click="goAddBank()">
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
                <div class="item-cell" v-for="(item,index) in itemList" :key="index">
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
            <div class="item-3">
                <div class="item-cell">
                    <div class="left">
                        <div class="img">
                            <img src="../assets/img/item_3_1.png" alt="">
                        </div>
                        <div class="text">
                            设置
                        </div>
                    </div>
                    <div class="right">
                        <img src="../assets/img/item_right.png" alt="">
                    </div>
                </div>

            </div>
        </div>
        <bottom-tab/>
    </div>
</template>

<script>
    import BottomTab from '../components/BottomTab'

    export default {
        name: "My",
        components: {
            BottomTab,
        },
        data() {
            return {
                itemList:[
                    {
                        text:'我的推广',
                        img:require('../assets/img/item_2_1.png')
                    },
                    {
                        text:'充值记录',
                        img:require('../assets/img/item_2_2.png')
                    },
                    {
                        text:'提现记录',
                        img:require('../assets/img/item_2_3.png')
                    },
                    {
                        text:'流水记录',
                        img:require('../assets/img/item_2_4.png')
                    },
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
            goAddBank(){
                this.$router.push('/AddBank')
            }
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
            padding: 30px  5%;
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
                margin-top: 60px;
                width: 90%;
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
        .item-1,.item-2,.item-3{
            margin-top: 30px;
            height: 120px;
            width: 100%;
            background-color: white;
            .item-cell{
                width: 90%;
                padding: 0 5%;
                height: 100%;
                border-bottom: 1px solid #a8a8a8;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .left{
                    width: 35%;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    .img{
                        width: 30%;
                        margin-left: 10px;
                        img{
                            width: 60px;
                        }
                    }
                    .text{
                        width: 70%;
                        /*text-align-last: justify;*/
                    }
                }
                .right{
                    img{
                        width: 40px;
                        height: 40px;
                    }
                }
            }
        }
        .item-2{
            height:120*4px;
            .item-cell{
                height: 120px;
            }
        }

    }
</style>
