<template>
    <div>
        <div class="content">
            <div class=" message-father"
                 v-for="(item,index) in message"
                 :key="index"
                 :class="{
                 'he':item.type===2,
                 'my':item.type===1,
                 'last-box':index===message.length-1
                 }">
                <div class="time" v-if="item.time">{{item.time}}</div>
                <div class="big-box">
                    <img class="touxiang" src="../assets/img/touxiang.png" alt="">
                    <div class="message-box">
                        <div class="user-name" v-if="item.type===2">
                            {{item.username}}
                        </div>
                        <div class="message-content">
                            {{item.text}}
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="input">
            <div class="yuyin">
                <img src="../assets/img/yuyin.png" alt="">
            </div>
            <div class="input-box">
                <input type="text">
            </div>
            <div class="emoji">
                <img src="../assets/img/emoji.png" alt="">
            </div>
            <div class="add">
                <img src="../assets/img/add.png" alt="">
            </div>
        </div>
        <bottom-tab/>
    </div>
</template>

<script>
    import BottomTab from '../components/BottomTab'

    export default {
        //投注
        name: "Betting",
        components: {
            BottomTab,
        },
        data() {
            return {
                message: [
                    {
                        username: '小红',
                        text: '你好啊',
                        type: 1
                    },
                    {
                        username: '小红',
                        text: '你好啊',
                        type: 2,
                        time: '22:22',
                    },
                    {
                        username: '小红',
                        text: '你好啊',
                        type: 1
                    },
                    {
                        username: '小黑',
                        text: '你好啊',
                        type: 2
                    },
                    {
                        username: '小红',
                        text: '你好啊',
                        type: 1
                    },
                    {
                        username: '小红',
                        text: '你好啊',
                        type: 1,
                        time: '22:22',
                    },
                    {
                        username: '小红',
                        text: '你好啊',
                        type: 2
                    },
                    {
                        username: '小红',
                        text: '你好啊',
                        type: 1
                    },
                    {
                        username: '小黑',
                        text: '你好啊',
                        type: 2
                    },
                    {
                        username: '小红',
                        text: '你好啊',
                        type: 1
                    },
                    {
                        username: '小红',
                        text: '你好啊',
                        type: 1
                    },
                    {
                        username: '小红',
                        text: '你好啊',
                        type: 2
                    },
                    {
                        username: '小红',
                        text: '你好啊',
                        type: 1
                    },
                    {
                        username: '小黑',
                        text: '你好啊',
                        type: 2
                    },
                    {
                        username: '小红',
                        text: '你好啊',
                        type: 1
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
        methods: {},

    }

</script>

<style scoped lang="less">
    .content {
        padding: 0 30px;
        height: 85vh;
        overflow: auto;
        background-color: rgb(237, 237, 237);
        .last-box {
            margin-bottom: 100px;
        }
        .message-father {
            min-height: 100px;

            .time {
                color: rgb(158, 158, 158);
            }

            .big-box {
                margin-top: 40px;
                display: flex;
                align-items: center;

                img {
                    width: 80px;
                    height: 80px;
                    border-radius: 20px;
                }

                .message-box {
                    max-width: 62%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    padding: 10px 20px;
                    border-radius: 10px;
                    position: relative;
                    text-align: left;
                }
            }

        }
        .my {
            .big-box {
                display: flex;
                flex-direction: row-reverse;

                .message-box {
                    margin-right: 30px;
                    background-color: rgb(149, 235, 105);
                }

                .message-box:before {
                    position: absolute;
                    content: "";
                    width: 0;
                    height: 0;
                    left: 100%;
                    top: 20px;
                    border-top: 13px solid transparent;
                    border-left: 20px solid rgb(149, 235, 105);
                    border-bottom: 13px solid transparent;
                }
            }

        }
        .he {
            .big-box {
                display: flex;

                .message-box {
                    margin-left: 30px;
                    padding: 0;
                    display: flex;
                    flex-wrap: wrap;

                    .user-name {
                        width: 100%;
                        color: #404040;
                    }

                    .message-content {
                        padding: 10px 20px;
                        background-color: white;
                        border-radius: 10px;
                    }

                    .message-content:before {
                        position: absolute;
                        content: "";
                        width: 0;
                        height: 0;
                        right: 100%;
                        top: 55px;
                        border-top: 13px solid transparent;
                        border-right: 20px solid #ffffff;
                        border-bottom: 13px solid transparent;
                    }
                }
            }

        }
    }
    .input{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 7vh;
        padding: 0 20px;
        background-color: rgb(246,246,246);
        border-bottom: 1px solid #a3a3a3;
        .yuyin,.emoji,.add{
            img{
                width: 50px;
                height: 50px;
            }
        }
        .input-box{

            height: 70%;
            input{
                width: 600px;
                height: 100%;
            }
        }
    }


</style>
