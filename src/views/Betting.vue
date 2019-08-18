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
                    <img class="touxiang" :src="item.face" alt="">
                    <div class="message-box" v-if="item.type!==3">
                        <!--                        <div class="user-name" v-if="item.type===2">-->
                        <!--                            {{item.username}}-->
                        <!--                        </div>-->
                        <div class="message-content">
                            {{item.text}}
                        </div>
                    </div>
                    <div class="hongbao-box" v-if="item.type===3" @click="openHongbao(item.face,item.red_name,item.people,item.red_name)">
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
                        <div class="title-text">{{red_name}} 的红包</div>
                    </div>
                    <div class="hongbao-open">
                        <div class="img" @click="kaiHongbao()"></div>
                    </div>
                </div>
            </van-popup>
            <van-popup
                    v-model="timeVisible"
                    position="top"
                    :overlay="false"
            >
                <div class="time-box">
                    <img :src="timeSrc" alt="">
                </div>
            </van-popup>
        </div>
        <div class="input" @click.stop>
            <div class="one">
                <div class="yuyin">
                    <img src="../assets/img/yuyin.png" alt="">
                </div>
                <div class="input-box">
                    <input v-model="text" ref="message" @focus="hide()" @keyup.enter="sendMessage()">
                </div>
                <div class="emoji" @click="openEmoji()">
                    <img src="../assets/img/emoji.png" alt="">
                </div>
                <div class="add" @click.stop="sendMessage()">
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
    import cc from "../assets/js/cc";

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
                pack: packData.slice(0, 100),
                // pack: packData,
                message: [
                    //type 1是自己 2是别人 3是红包
                    // {
                    //     username: '小红',
                    //     text: '你好啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                    //     type: 1,
                    //     touxiang: require('../assets/img/touxiang.png'),
                    // },
                    // {
                    //     username: '小红',
                    //     text: '你好啊',
                    //     type: 2,
                    //     time: '22:22',
                    //     touxiang: require('../assets/img/touxiang.png'),
                    // },
                    // {
                    //     username: '小红',
                    //     text: '你好啊',
                    //     type: 1,
                    //     touxiang: require('../assets/img/touxiang.png'),
                    //     time: '22:22',
                    // },
                    // {
                    //     username: '小红',
                    //     text: '你好啊',
                    //     touxiang: require('../assets/img/touxiang.png'),
                    //     type: 2,
                    // },
                    // {
                    //     username: '小红',
                    //     text: '你好啊',
                    //     touxiang: require('../assets/img/touxiang.png'),
                    //     type: 1
                    // },
                    // {
                    //     username: '小红',
                    //     text: '你好啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                    //     type: 3,
                    //     touxiang: require('../assets/img/touxiang.png'),
                    // },
                    // {
                    //     username: '小红',
                    //     text: '你好啊',
                    //     type: 3,
                    //     touxiang: require('../assets/img/touxiang.png'),
                    // },
                    // {
                    //     username: '小红',
                    //     text: '你好啊',
                    //     type: 3,
                    //     touxiang: require('../assets/img/touxiang.png'),
                    // },
                    // {
                    //     username: '小红',
                    //     text: '你好啊',
                    //     type: 3,
                    //     touxiang: require('../assets/img/touxiang.png'),
                    // },
                    // {
                    //     username: '小红',
                    //     text: '你好啊',
                    //     type: 3,
                    //     touxiang: require('../assets/img/touxiang.png'),
                    // }
                ],
                hbVisible: false,
                timeVisible:false,//开奖时间
                timeSrc:'',
                people:'',
                websock: null,
                reconnectData: null,
                lockReconnect: false,    //避免重复连接，因为onerror之后会立即触发 onclose
                timeout: 1000 * 10,          //10s一次心跳检测
                timeoutObj: null,
                serverTimeoutObj: null,
            }
        },
        beforeRouteEnter(to, from, next) {
            next()
        },
        beforeRouteLeave(to, from, next) {
            next()
        },
        created() {
            this.hbVisible=false;
            this.initWebSocket();
            if (cc.getSession('message')) {
                this.message = cc.getSession('message');
            }
        },
        beforeDestroy() {
            let obj = {
                'type': 'logout',
                'client_id': '7f00000108ff00000001',
            };
            this.wsSend(obj);
        },
        destroyed() {
            this.lockReconnect = true;
            this.wsClose();               //离开路由之后断开websocket连接
            clearTimeout(this.reconnectData);      //离开清除 timeout
            clearTimeout(this.timeoutObj);         //离开清除 timeout
            clearTimeout(this.serverTimeoutObj);   //离开清除 timeout
        },
        mounted() {
            this.topTop();
            $('#InputSearch').hide();//隐藏表情搜索框
            $('#Categories').hide();
        },
        methods: {
            curentTime(now) {
                var year = now.getFullYear();       //年
                var month = now.getMonth() + 1;     //月
                var day = now.getDate();            //日
                var hh = now.getHours();            //时
                var mm = now.getMinutes();          //分
                var ss = now.getSeconds();           //秒
                var clock = year + "-";
                if (month < 10)
                    clock += "0";
                clock += month + "-";
                if (day < 10)
                    clock += "0";
                clock += day + " ";
                if (hh < 10)
                    clock += "0";
                clock += hh + ":";
                if (mm < 10) clock += '0';
                clock += mm + ":";
                if (ss < 10) clock += '0';
                clock += ss;
                return (clock);
            },
            initWebSocket() {
                console.log('启动中');
                let wsurl = 'ws://47.244.228.229:7272';
                this.websock = new WebSocket(wsurl);
                this.websock.onopen = this.wsOpen;          //连接成功
                this.websock.onmessage = this.wsMessage;    //广播成功
                this.websock.onerror = this.wsError;        //连接断开，失败
                this.websock.onclose = this.wsClose;          //连接关闭
            },//初始化webSocket
            wsOpen() {
                console.log('连接成功');
                let obj = {
                    'type': 'login',
                    'client_name': this.$store.state.name,
                    'room_id': '1',
                    'face': this.$store.state.face,
                    'token': this.$store.state.token,
                };
                this.websock.send(JSON.stringify(obj))
                // this.heatBeat();
            },//连接成功
            wsError() {
                console.log('连接错误');
                // this.$utils.Msg('加入聊天室失败');
                this.reconnect();
            },//连接失败
            wsClose() {
                console.log('断开连接');
            },//各种问题导致的 连接关闭
            wsMessage(data) {//接收数据
                let res = JSON.parse(data.data);
                if (res.type === 'ping') {//心跳检测
                    let obj = {
                        'type': 'pong'
                    };
                    this.websock.send(JSON.stringify(obj));
                }else if (res.type === 'login') {

                } else if (res.type === 'say') {
                    let obj = {
                        name: res.from_client_name,
                        text: res.content,
                        face: res.face,
                        type: this.$store.state.token == res.token ? 1 : 2,
                    };
                    this.message.push(obj);
                    if (this.message.length > 100) {//聊天最多100条
                        this.message.shift();
                    }
                    cc.setSession('message', this.message);//数据同步到缓存
                    this.topTop();
                }else if (res.type==='send_red_bags_img'){
                    let _this=this;
                    var show=()=>{
                        this.timeVisible=true;
                        setTimeout(function () {
                            _this.timeVisible=false
                        },2000)
                    };
                    switch (res.ident) {
                        case 1:
                            this.timeSrc=require('../assets/img/ident_1.png');
                            show();
                            break;
                        case 2:
                            this.timeSrc=require('../assets/img/ident_2.png');
                            show();
                            break;
                        case 3:
                            this.timeSrc=require('../assets/img/ident_3.png');
                            show();
                            break;
                        case 4:
                            var obj = {
                                name: res.from_client_name,
                                face: res.face,
                                type: 3,
                                people:res.data.people,
                                red_name:res.data.red_name
                            };
                            this.message.push(obj);
                            if (this.message.length > 100) {//聊天最多100条
                                this.message.shift();
                            }
                            cc.setSession('message', this.message);//数据同步到缓存
                            this.topTop();
                    }
                }
                // this.heatBeat();      //收到消息会刷新心跳检测，如果一直收到消息，就推迟心跳发送
            },//数据接收
            wsSend(data) {
                this.websock.send(JSON.stringify(data));
            },//数据发送
            reconnect() {
                if (this.lockReconnect) {  //这里很关键，因为连接失败之后之后会相继触发 连接关闭，不然会连接上两个 WebSocket
                    return
                }
                this.lockReconnect = true;
                this.reconnectData && clearTimeout(this.reconnectData);
                this.reconnectData = setTimeout(() => {
                    this.initWebSocket();
                    this.lockReconnect = false;
                }, 5000)
            },//socket重连
            heatBeat() {
                this.timeoutObj && clearTimeout(this.timeoutObj);
                this.serverTimeoutObj && clearTimeout(this.serverTimeoutObj);
                this.timeoutObj = setTimeout(() => {
                    this.websocketsend({type: '心跳检测'});   //根据后台要求发送
                    this.serverTimeoutObj = setTimeout(() => {
                        this.websock.close();       //如果  5秒之后我们没有收到 后台返回的心跳检测数据 断开socket，断开后会启动重连机制
                    }, 5000);
                }, this.timeout)
            },//心跳检测
            sendMessage() {
                if (!this.emoji) {
                    this.$refs.message.focus();
                }
                if (this.text !== '') {
                    let obj = {
                        'type': 'say',
                        'from_client_id': '7f00000108ff00000001',
                        'from_client_name': this.$store.state.name,
                        'to_client_id': 'all',
                        'content': this.text,
                        'time': this.curentTime(new Date()),
                        'face': this.$store.state.face,
                        'token': cc.getLocal('token')
                    };
                    this.wsSend(obj);
                    this.text = '';
                }
            },//发送消息
            openHongbao(src, name,people,red_name) {
                this.hbVisible = true;
                this.hbTouxiang = src;
                this.people=people;
                this.hbName = name;
                this.red_name=red_name;
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
                            name: _this.hbName,
                            people:_this.people,
                            red_name:_this.red_name
                        }
                    })
                });
            },//第二次点开红包
            topTop() {
                setTimeout(function () {
                    $('.content').scrollTop(10000);
                });
            },//滚动条定位
            show() {
                this.emoji = true;
                $('.content').css('height', '55vh');
                $('.input').css({
                    'height': '250px',
                    'padding-bottom': '30px',
                });
                $('.emoji-box').css('height', '250px');
                setTimeout(function () {
                    $('.content').scrollTop(10000);
                }, 300);
            },//显示
            hide() {
                this.emoji = false;
                $('.content').css('height', '85vh');
                $('.emoji-box').css('height', '0px');
                $('.input').css({
                    'height': '50px',
                    'padding-bottom': '0px',
                });
            },//隐藏
            openEmoji() {
                let _this = this;
                if (!this.emoji) {
                    this.show();
                    this.topTop();
                    setTimeout(function () {
                        $(document).click(function () {
                            _this.hide();
                        });
                    }, 50)
                } else {
                    this.hide()
                }
            },//打开表情选择框
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

        .time-box{
            width: 100%;
            display: flex;
            justify-content: center;
            padding-top: 100px;
            img{
                width: 50%;
                height: 50%;
            }
        }
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

                img {
                    width: 80px;
                    height: 80px;
                    border-radius: 20px;
                }

                .message-box {
                    max-width: 62%;
                    height: 100%;
                    display: flex;
                    margin-top: 10px;
                    align-items: center;
                    padding: 15px 20px;
                    border-radius: 10px;
                    position: relative;
                    text-align: left;

                    .message-content {
                        word-break: break-all; /*内部数字字母换行*/
                    }
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
                align-items: flex-start;

                .message-box {
                    margin-left: 30px;
                    background-color: white;

                    .user-name {
                        width: 100%;
                        color: #404040;
                    }
                }

                .message-box:before {
                    position: absolute;
                    content: "";
                    width: 0;
                    height: 0;
                    right: 100%;
                    top: 20px;
                    border-top: 13px solid transparent;
                    border-right: 20px solid #ffffff;
                    border-bottom: 13px solid transparent;
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
        height: 85% !important;

        #Emojis {
            .container-emoji {
                /*overflow: hidden !important;*/
                overflow-y: scroll !important;
                padding-bottom: 100px !important;
                height: 10.1875rem !important;
            }
        }
    }

    #EmojiPicker::-webkit-scrollbar {
        display: none;
    }
</style>
