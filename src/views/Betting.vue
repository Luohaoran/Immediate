<template>
    <div class="Betting">
        <div class="content">
            <div class=" message-father"
                 v-for="(item,index) in message"
                 :key="index"
                 :class="{
                 'my':item.type===1,
                 'he':item.type===2,
                 'hongbao':item.type===3,
                 'last-box':index===message.length-1
                 }">
                <div class="time" v-if="item.time">{{item.time}}</div>
                <div class="big-box">
                    <img class="touxiang" src="../assets/img/touxiang.png" alt="">
                    <div class="message-box" v-if="item.type!==3">
                        <div class="user-name" v-if="item.type===2">
                            {{item.username}}
                        </div>
                        <div class="message-content">
                            {{item.text}}
                        </div>
                    </div>
                    <div class="hongbao-box" v-if="item.type===3" @click="openHongbao(item.touxiang,item.username)">
                        <div class="hongbao-top">

                            <img src="../assets/img/hongbao.png" alt="">
                            <div>恭喜发财 大吉大利</div>
                        </div>
                        <div class="hongbao-bottom">
                            <div>xx红包</div>
                        </div>
                    </div>
                </div>
            </div>
            <van-popup v-model="hbVisible">
                <div class="hongbao-content">
                    <div class="hongbao-title">
                        <div class="img">
                            <img :src="hbTouxiang" alt="">
                        </div>
                        <div class="title-text">{{hbName}} 的红包</div>
                    </div>
                    <div class="hongbao-open">
                        <div class="img" @click="kaiHongbao()"></div>
                    </div>
                </div>
            </van-popup>
        </div>
        <div class="input" @click.stop>
            <div class="one">
                <div class="yuyin">
                    <img src="../assets/img/yuyin.png" alt="">
                </div>
                <div class="input-box">
                    <input v-model="text" @focus="openEmojis()">
                </div>
                <div class="emoji" @click="openEmoji()">
                    <img src="../assets/img/emoji.png" alt="">
                </div>
                <div class="add">
<!--                    发送-->
                    <img src="../assets/img/send.png" alt="">
                </div>
            </div>
            <div class="two">
                <div class="emoji-box" @click.stop>
                    <VEmojiPicker :pack="pack" @select="selectEmoji"/>
                </div>
            </div>
        </div>

        <bottom-tab/>
    </div>
</template>

<script>
    import BottomTab from '../components/BottomTab'
    import VEmojiPicker from 'v-emoji-picker';
    import packData from 'v-emoji-picker/data/emojis.json';

    export default {
        //投注
        name: "Betting",
        components: {
            BottomTab,
            VEmojiPicker
            // Emoji,
        },
        props: {
            // pack: { type: Array, required: true },
            // labelSearch: {type: String, default: '搜索表情...'},
            // showCategory: { type: Boolean, default: true },
            // emojisByRow: { type: Number, default: 5}
        },
        data() {
            return {
                text: '',
                hbTouxiang: '',
                emoji: false,
                hbName: '',
                pack: packData.slice(0, 50),
                message: [
                    {
                        username: '小红',
                        text: '你好啊',
                        type: 1,
                        touxiang: require('../assets/img/touxiang.png'),
                    },
                    {
                        username: '小红',
                        text: '你好啊',
                        type: 2,
                        time: '22:22',
                        touxiang: require('../assets/img/touxiang.png'),
                    },
                    {
                        username: '小红',
                        text: '你好啊',
                        type: 1,
                        touxiang: require('../assets/img/touxiang.png'),
                        time: '22:22',
                    },
                    {
                        username: '小红',
                        text: '你好啊',
                        touxiang: require('../assets/img/touxiang.png'),
                        type: 2,
                    },
                    {
                        username: '小红',
                        text: '你好啊',
                        touxiang: require('../assets/img/touxiang.png'),
                        type: 1
                    },
                    {
                        username: '小红',
                        text: '你好啊',
                        type: 3,
                        touxiang: require('../assets/img/touxiang.png'),
                    },
                    {
                        username: '小红',
                        text: '你好啊',
                        type: 3,
                        touxiang: require('../assets/img/touxiang.png'),
                    },
                    {
                        username: '小红',
                        text: '你好啊',
                        type: 3,
                        touxiang: require('../assets/img/touxiang.png'),
                    },
                    {
                        username: '小红',
                        text: '你好啊',
                        type: 3,
                        touxiang: require('../assets/img/touxiang.png'),
                    },
                    {
                        username: '小红',
                        text: '你好啊',
                        type: 3,
                        touxiang: require('../assets/img/touxiang.png'),
                    }

                ],
                hbVisible: false,
                websock:null,
            }
        },
        beforeRouteEnter(to, from, next) {
            next()
        },
        beforeRouteLeave(to, from, next) {
            next()
        },
        created() {
            //页面刚进入时开启长连接
            // this.initWebSocket()
        },
        destroyed(){
            // this.websocketclose();
        },
        mounted() {
            $('.content').scrollTop($('.content').height());
            $('#InputSearch').hide();//隐藏表情搜索框
            $('#Categories').hide();
        },
        methods: {
            initWebSocket(){ //初始化weosocket
                const wsuri = '';//ws地址
                this.websock = new WebSocket(wsuri);
                this.websocket.onopen = this.websocketonopen;
                this.websocket.onerror = this.websocketonerror;
                this.websock.onmessage = this.websocketonmessage;
                this.websock.onclose = this.websocketclose;
            },

            websocketonopen() {
                console.log("WebSocket连接成功");
            },
            websocketonerror(e) { //错误
                console.log("WebSocket连接发生错误");
            },
            websocketonmessage(e){ //数据接收
                const redata = JSON.parse(e.data);
                // 接收数据
            },
            websocketsend(agentData){//数据发送
                this.websock.send(agentData);
            },
            websocketclose(e){ //关闭
                console.log("connection closed (" + e.code + ")");
            },
            openHongbao(src, name) {
                this.hbVisible = true;
                this.hbTouxiang = src;
                this.hbName = name;
            },//第一次点开红包
            selectEmoji(emoji) {
                this.text += (emoji.emoji);
            },//点击emoji
            kaiHongbao() {
                let _this = this;
                $('.img').removeClass("xuanzhuan").addClass("xuanzhuan").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                    $('.img').removeClass("xuanzhuan");//动画效果设置
                    _this.$router.push({
                        name: '/Hongbao_record', params: {
                            src: _this.hbTouxiang,
                            name: _this.hbName
                        }
                    })
                });
            },//第二次点开红包
            openEmoji() {
                this.emoji = !this.emoji;
                var content = $('.content');
                var show = () => {
                    $('.content').css('height', '55vh');
                    $('.input').css({
                        'height': '250px',
                        'padding-bottom': '30px',
                    });
                    $('.emoji-box').css('height', '250px');

                    content.scrollTop = content.height();
                };
                var hide = () => {
                    $('.content').css('height', '85vh');
                    $('.emoji-box').css('height', '0px');
                    $('.input').css({
                        'height': '50px',
                        'padding-bottom': '0px',
                    });

                };
                if (!this.emoji) {
                    show();
                    setTimeout(function () {
                        $(document).click(function () {
                            hide()
                        });
                    }, 50)
                } else {
                    hide()
                }
            },//打开表情选择框
            openEmojis(){
                $('.content').css('height', '85vh');
                $('.emoji-box').css('height', '0px');
                $('.input').css({
                    'height': '50px',
                    'padding-bottom': '0px',
                });
                this.emoji = false;
            }
        },
    }

</script>

<style scoped lang="less">
    .Betting {
        margin-bottom: 95px;
    }

    .content {
        width: 94%;
        padding: 0 3%;
        height: 85vh;
        overflow: auto;
        background-color: rgb(237, 237, 237);
        transition: all .1s linear;

        .last-box {
            margin-bottom: 100px;
        }

        .hongbao-content {
            position: relative;
            width: 577px;
            height: 905px;
            padding-top: 60px;
            background: url("../assets/img/hb_bg.png") no-repeat;
            background-size: 100%;
            background-position: center;
            /*padding-top: 300px;*/

            .hongbao-title {
                width: 60%;
                margin: 0 auto;
                display: flex;
                align-items: center;
                height: 200px;
                /*margin-top: 50px;*/
                color: rgb(255, 223, 175);
                /*background-color: white;*/

                .img {
                    width: 60px;
                    height: 60px;
                    border-radius: 10px;
                    overflow: hidden;
                    margin-right: 50px;

                    img {
                        width: 100%;
                    }
                }

            }

            .hongbao-open {
                position: absolute;
                width: 100%;
                height: 182px;
                display: flex;
                justify-content: center;
                bottom: 100px;

                .img {
                    width: 182px;
                    height: 182px;
                    border-radius: 50%;
                    background: url("../assets/img/open_hb.png");
                    background-size: 100%;

                }

                .xuanzhuan {
                    animation: proRotate 1s;
                }

                @keyframes proRotate {
                    0% {
                        -webkit-transform: rotateY(-360deg);
                    }
                }
            }
        }

        .message-father {
            min-height: 100px;

            .time {
                color: rgb(158, 158, 158);
                width: 100%;
                text-align: center;
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

        .hongbao {
            .big-box {
                display: flex;

                .hongbao-box {

                    width: 220*2px;
                    /*background-color: #2c3e50;*/
                    margin-left: 30px;
                    padding: 0;
                    padding-top: 50px;
                    height: 70*2px;
                    display: flex;
                    flex-wrap: wrap;

                    .hongbao-top {
                        width: 100%;
                        color: white;
                        font-size: 28px;
                        height: 80%;
                        background-color: rgb(249, 156, 59);
                        display: flex;
                        align-items: center;
                        position: relative;
                        border-top-right-radius: 10px;
                        border-top-left-radius: 10px;

                        img {
                            width: 75px;
                            height: 45*2px;
                            margin-right: 30px;
                            margin-left: 30px;
                        }
                    }

                    .hongbao-top:before {
                        position: absolute;
                        content: "";
                        width: 0;
                        height: 0;
                        right: 100%;
                        top: 40px;
                        border-top: 13px solid transparent;
                        border-right: 20px solid #f99c3b;
                        border-bottom: 13px solid transparent;
                    }

                    .hongbao-bottom {
                        padding-left: 3%;
                        width: 101%;
                        background-color: white;
                        color: #999999;
                        height: 30%;
                        border-bottom-right-radius: 10px;
                        border-bottom-left-radius: 10px;

                    }

                    /*.message-content {*/
                    /*    padding: 10px 20px;*/
                    /*    background-color: white;*/
                    /*    border-radius: 10px;*/
                    /*}*/

                    /*.message-content:before {*/
                    /*    position: absolute;*/
                    /*    content: "";*/
                    /*    width: 0;*/
                    /*    height: 0;*/
                    /*    right: 100%;*/
                    /*    top: 20px;*/
                    /*    border-top: 13px solid transparent;*/
                    /*    border-right: 20px solid #ffffff;*/
                    /*    border-bottom: 13px solid transparent;*/
                    /*}*/
                }
            }
        }
    }

    .input {
        position: fixed;
        bottom: 120px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        width: 92%;
        padding: 0 4%;
        background-color: rgb(246, 246, 246);
        border-bottom: 1px solid #a3a3a3;
        transition: all .1s linear;

        .one {
            width: 100%;
            height: 100px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;

            .yuyin, .emoji, .add {
                width: 50px;
                height: 50px;
                img {
                    width: 50px;
                    height: 50px;
                }
            }
            /*.add{*/
            /*    display: flex;*/
            /*    justify-content: center;*/
            /*    align-items: center;*/
            /*    width: 100px;*/
            /*    height: 50px;*/
            /*    border-radius: 30px;*/
            /*    border: 1px solid black;*/
            /*    font-size: 28px;*/
            /*    text-align: center;*/
            /*}*/
            .input-box {
                width: 70%;
                height: 70%;

                input {
                    border-radius: 10px;
                    width: 90%;
                    height: 100%;
                    padding: 0 5%;
                }
            }
        }

        .two {
            width: 100%;
            overflow: hidden;

            .emoji-box {
                display: flex;
                height: 0vh;
                width: 100%;
                /*overflow: hidden;*/
            }
        }

    }


</style>
<style lang="less">
    .van-popup {
        background: none;
    }

    #EmojiPicker {
        width: 100% !important;
        height: 200*2px !important;
        overflow: scroll !important;

        #Emojis {
            .container-emoji {
                overflow: hidden !important;
                padding-bottom: 150px !important;
            }
        }
    }
    #EmojiPicker::-webkit-scrollbar{
        display: none;
    }

</style>
