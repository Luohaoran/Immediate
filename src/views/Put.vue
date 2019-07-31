<template>
    <div>
        <Top title="提现"></Top>
        <div class="content">
            <div class="top-message">
                <p>可提现金额</p>
                <p>{{money}}元</p>
            </div>
            <div class="from">
                <div class="select">
                    <div class="show-content" @click="showSlect">
                        {{checkValue}}
                        <img src="../assets/img/select_img.png" alt="">
                    </div>
                    <div class="select-box" v-show="selectVisible">
                        <div
                                class="select-item"
                                v-for="(item,index) in bankCard"
                                :key="index"
                                @click="checkSelect(item.bank_card)"
                        >
                            <div>{{item.bank_card}}</div>
                        </div>
                    </div>
                </div>
                <div class="input">
                    <input type="text" placeholder="请输入充值金额" v-model="jine">
                </div>
                <div class="okBtn" @click="okBtn()">
                    确认
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Top from '../components/Top'
    export default {
        name: "Put",
        components: {Top},
        data() {
            return {
                checkValue:'请选择银行卡号',
                selectVisible:false,
                money:this.$store.state.money,
                bankCard:[
                    {card_num:111111111},
                    {card_num:111111111},
                    {card_num:111111111},
                ],
                jine:''
            }
        },


        beforeRouteEnter(to, from, next) {
            next()
        },
        beforeRouteLeave(to, from, next) {
            next()
        },
        created() {
            this.getDra_index()

        },
        mounted() {

        },
        methods: {
            getDra_index(){
              this.$api.dra_index().then(res=>{
                  if (res.error_code===1){
                      this.bankCard=res.result.bankCard;
                  }
              })
            },
            showSlect(){
                this.selectVisible=!this.selectVisible
            },
            checkSelect(item) {
                this.checkValue = item;
                this.selectVisible = !this.selectVisible
            },//下拉点击事件
            okBtn(){

            },
        },

    }

</script>

<style scoped lang="less">
    .content{
        width:100%;

        .top-message{
            padding: 60px 0;
            /*height: 150px;*/
            background-color: rgb(226,226,226);
            font-size: 40px;
            text-align: center;
            margin-bottom: 100px;
        }
        .from{
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

    }

</style>
