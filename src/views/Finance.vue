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
                <div class="okBtn" @click="okBtn()">
                    确认
                </div>
                <div class="dingdan">
                    <button class="url" data-clipboard-action="copy" :data-clipboard-text="dingdanNum">
                        订单号:{{dingdanNum}} <span @click="copy()">复制</span></button>
                    <div class="tips">
                        <img src="../assets/img/tips_img.png" alt="">
                        <span>提示:充值时请您转账备注好订单号，方便账户即时到账</span>
                    </div>
                </div>
            </div>
            <div class="saoma" v-show="type===2">
                <div class="code">
                    <div class="qq-img">
                        <img :src="pay_src" alt="">
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
                >扫码充值
                </button>
                <button
                        @click="typeClick(2)"
                        :class="(type===2)?('on'):('')"
                >人工充值
                </button>
            </div>
        </div>
        <van-popup v-model="popupVisible"><img :src="img_src" alt=""></van-popup>
        <bottom-tab/>
    </div>
</template>

<script>
    import {url} from '../request/api/base'
    import BottomTab from '../components/BottomTab'


    export default {
        name: "Finance",
        components: {
            BottomTab,
        },
        data() {
            return {
                popupVisible:false,
                selectVisible: false,
                checkValue: '微信',
                selectitem: ['微信', '支付宝'],
                jine: '',
                dingdanNum: '',
                type: 1,
                pay_src:'',
                img_src:'',
            }
        },


        beforeRouteEnter(to, from, next) {
            next()
        },
        beforeRouteLeave(to, from, next) {
            next()
        },
        created() {
            this.getRe_d();
            this.getCus_qrCode();
        },
        mounted() {

        },
        methods: {
            okBtn(){
                if (this.jine===''){
                    this.$utils.Msg('请输入充值金额')
                } else {
                    let obj={
                        payment_type:(this.checkValue==='微信')?(1):(2),
                        bill_no:this.dingdanNum,
                        money:this.jine,
                        user_id:this.$store.state.id
                    };
                    this.$api.postRe_d(obj).then(res=>{
                        if (res.error_code===1){
                            this.popupVisible=true;
                            this.img_src=url+'/'+res.result.qrcode
                        }
                    })

                }
            },
            getCus_qrCode(){
              this.$api.cus_qrCode().then(res=>{
                  if (res.error_code===1){
                      this.pay_src=url+'/'+res.result;
                  }
              })
            },
            getRe_d(){
              this.$api.re_d().then(res=>{
                 if (res.error_code===1){
                     this.dingdanNum=res.result.bill_no
                 }
              })
            },
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
            text-align: center;
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
            width: 85%;
            display: flex;
            justify-content: space-between;
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
