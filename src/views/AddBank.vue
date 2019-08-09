<template>
    <div>
        <Top title="绑定银行卡"></Top>
        <div class="content">
            <div class="item-box">
                <div class="bank-item" v-for="(item,index) in bankList" :key="index">
                    <div class="bank-message">
                        <div class="bank-img"></div>
                        <div class="bank-name-content">
                            <div class="bank-name">
                                {{item.bank_name}}
                            </div>
                            <div class="bank-type">
                                {{item.bank_address}}
                            </div>
                        </div>
                        <div class="bank-deldte" @click="delBank(item.id)">删除</div>
                    </div>
                    <div class="bank-num">
                        {{item.bank_card}}
                    </div>
                </div>
            </div>
            <router-link tag="div" to="/AddBankSon" class="add-bank">
                <div class="left">
                    <div class="add-img">
                        <img src="../assets/img/add_bank.png" alt="">
                    </div>
                    <div class="add-text">
                        添加银行卡
                    </div>
                </div>
                <div class="right">
                    <img src="../assets/img/bank_right.png" alt="">
                </div>
            </router-link>
        </div>

    </div>
</template>

<script>
    import Top from '../components/Top'
    import {Dialog} from 'vant';

    export default {
        name: "AddBank",
        components: {
            Top,
        },
        data() {
            return {
                bankList: []
            }
        },
        beforeRouteEnter(to, from, next) {
            next()
        },
        beforeRouteLeave(to, from, next) {
            next()
        },
        created() {
            this.getBank();
        },
        mounted() {

        },
        methods: {
            getBank() {
                this.$api.getBank().then(res => {
                    if (res.error_code === 1) {
                        if (res.result.length > 0) {
                            res.result.forEach((item) => {
                                item.bank_card = '**** **** ****' + item.bank_card.substring(item.bank_card.length - 4)
                            });
                            this.bankList = res.result;
                        }
                    }
                })
            },
            delBank(id) {
                // console.log(Dialog);
                Dialog.confirm({
                    title: '提示',
                    message: '确认删除'
                }).then(() => {
                    this.$api.deleteBank(
                        {
                            id: id
                        }
                    ).then(res => {
                        if (res.error_code === 1) {
                            this.$utils.Msg('删除成功');
                            this.getBank();
                        }
                    })
                }).catch(() => {
                    // on cancel
                });

            }
        },

    }

</script>

<style scoped lang="less">

    .content {
        width: 100%;
        height: 92vh;
        background-color: rgb(51, 51, 51);
        overflow: scroll;

        .item-box {
            width: 100%;
            padding-top: 50px;

            .bank-item {
                height: 250px;
                width: 90%;
                margin: 0 auto;
                background-color: white;
                border-radius: 10px;
                margin-bottom: 30px;

                .bank-message {
                    width: 90%;
                    padding: 0 5%;
                    height: 50%;
                    display: flex;
                    align-items: center;

                    .bank-img {
                        width: 80px;
                        height: 80px;
                        background-color: #2c3e50;
                        border-radius: 50%;
                    }

                    .bank-name-content {
                        padding-left: 3%;
                        width: 65%;
                        text-align: left;

                        .bank-name {

                        }

                        .bank-type {

                        }
                    }
                }

                .bank-num {
                    width: 100%;
                    height: 50%;
                    /*border: 1px solid black;*/
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 60px;
                }
            }

        }

        .add-bank {
            width: 90%;
            padding: 0 5%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: rgb(54, 54, 54);
            border-top: 1px solid #4c4c4c;
            border-bottom: 1px solid #4c4c4c;


            .left {
                height: 100%;
                width: 30%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                color: white;

                .add-img {
                    width: 40px;
                    height: 40px;

                    img {
                        width: 40px;
                    }
                }

                .add-text {

                }
            }

            .right {
                img {
                    width: 30px;
                }
            }
        }

    }


</style>
