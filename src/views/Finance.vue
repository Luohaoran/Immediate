<template>
    <div>
        <div class="content">
            <div class="rengong" v-show="type===1">
                <div class="select">
                    <div class="show-content" @click="showSlect">
                        {{checkValue}}
                        <img src="../assets/img/select_img.png" alt="">
                    </div>
                    <div class="select-box" v-show="selectVisible">
                        <div
                                class="select-item"
                                v-for="(item,index) in selectitem"
                                :key="index"
                                @click="checkSelect(item)"
                        >
                            <div>{{item}}</div>
                        </div>
                    </div>
                </div>
                <div class="input">
                    <input type="text" placeholder="请输入充值金额" v-model="jine">
                </div>
                <div class="okBtn">
                    确认
                </div>
                <div class="dingdan">
                    <button class="url" data-clipboard-action="copy" :data-clipboard-text="dingdanNum">
                        订单号:2222222222222222222222 <span @click="copy()">复制</span></button>
                    <div class="tips">
                        <img src="../assets/img/tips_img.png" alt="">
                        <span>提示:充值时请您转账备注好订单号，方便账户即时到账</span>
                    </div>
                </div>
            </div>
            <div class="saoma" v-show="type===2">
                <div class="code">
                    <div class="qq-img">
                        <img src="../assets/img/wx_img.png" alt="">
                    </div>
                </div>
                <div class="tips">
                    <img src="../assets/img/tips_img.png" alt="">
                    <span>提示:充值时请您转账备注好订单号，方便账户即时到账</span>
                </div>
            </div>
            <div class="type-check">
                <button
                        @click="typeClick(1)"
                        :class="(type===1)?('on'):('')"
                >人工充值
                </button>
                <button
                        @click="typeClick(2)"
                        :class="(type===2)?('on'):('')"
                >扫码充值
                </button>
            </div>
        </div>
        <bottom-tab/>
    </div>
</template>

<script>
    import BottomTab from '../components/BottomTab'


    export default {
        name: "Finance",
        components: {
            BottomTab,
        },
        data() {
            return {
                selectVisible: false,
                checkValue: '微信',
                selectitem: ['微信', '支付宝'],
                jine: '',
                dingdanNum: '222222222222222222222222222',
                type: 1,
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
            copy() {
                let _this = this;
                let clipboard = new _this.clipboard(".url");
                clipboard.on('success', () => {
                    this.$utils.Msg("复制成功")
                });
                clipboard.on('error', () => {
                    this.$utils.Msg("复制失败")
                });
            },//复制订单号
            showSlect() {
                this.selectVisible = !this.selectVisible
            },//显示下拉选择
            checkSelect(item) {
                this.checkValue = item;
                this.selectVisible = !this.selectVisible
            },//下拉点击事件
            typeClick(type) {
                this.type = type;
            },//选择充值方式
        },
    }

</script>

<style scoped lang="less">
    .content {
        height: 85vh;
        padding-top: 7vh;

        .rengong {
            height:21.625rem;
            .select {
                width: 80%;
                margin: 0 auto;
                text-align: left;
                margin-bottom: 30px;

                .show-content {
                    background-color: rgb(237, 237, 237);
                    height: 50*2px;
                    border-radius: 5px;
                    padding: 0 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #666666;

                    img {
                        width: 15*2px;
                    }
                }

                .select-box {
                    position: fixed;
                    width: 80%;

                    .select-item {
                        border-radius: 5px;
                        height: 50*2px;
                        line-height: 50*2px;
                        padding: 0 20px;
                        background-color: rgb(171, 171, 171);
                        border-bottom: 1px solid white;
                    }
                }
            }

            .input {
                width: 80%;
                margin: 0 auto;
                text-align: left;
                background-color: rgb(237, 237, 237);
                height: 50*2px;
                border-radius: 5px;

                input {
                    padding: 0 3%;
                    height: 100%;
                    width: 94%;
                    background-color: rgb(237, 237, 237);
                }
            }

            .okBtn {
                width: 80%;
                margin: 0 auto;
                margin-top: 80px;
                text-align: center;
                height: 50*2px;
                line-height: 50*2px;
                border-radius: 10px;
                background-color: rgb(26, 173, 25);
                color: white;
            }

        }

        .saoma{
            height:21.625rem;
            .code{
                .qq-img{
                    width: 220*2px;
                    margin: 0 auto;
                    height: 220*2px;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    background:rgb(231,231,231) ;
                    margin-bottom: 180px;
                    img{
                        width: 200*2px;
                        height: 200*2px;
                    }
                }
            }
        }
        .tips {
            margin: 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            span {
                font-size: 28px;
            }

            img {
                width: 30px;
                margin-right: 5px;
            }
        }

        .dingdan {
            margin-top: 160px;

            button {
                background: none;
                margin-bottom: 20px;

                span {
                    color: rgb(26, 173, 25);
                }
            }


        }

        .type-check {
            margin: 0 auto;
            width: 80%;
            display: flex;
            justify-content: space-around;
            margin-top: 100px;

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


</style>
