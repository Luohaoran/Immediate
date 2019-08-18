<template>
    <div class="Hongbao_record">
        <div class="top">
            <img src="../assets/img/hb_bank.png" alt="" @click="bank()">
            <div>红包记录</div>
        </div>
        <div class="content">
            <div class="hb_name">
                <div class="hongbao-title">
<!--                    <div class="img">-->
<!--                        <img :src="hbTouxiang" alt="">-->
<!--                    </div>-->
                    <div class="title-text">{{hbName}} 的红包</div>
                </div>
                <div class="hongbao-jine">
                    <div class="hongbao-jine-top">
                        <span class="jine">1.00</span>
                        <span class="yuan">元</span>
                    </div>
                    <div class="hongbao-jine-bottom">
                        <span>已存入零钱，可直接提现></span>
                    </div>

                </div>
            </div>
            <div class="hongba-time">20个红包1小时内领取完毕</div>
            <div class="hongbao-list">
                <div class="hongbao-item" v-for="(item,index) in people" :key="index">
                    <div class="hongbao-item-left">
                        <div class="hongbao-item-left-img">
                            <img :src="item.face" alt="">
                        </div>
                        <div class="hongbao-item-left-text">
                            <div class="name">{{item.name}}</div>
                            <div class="time">{{item.time}}</div>
                        </div>
                    </div>
                    <div class="hongbao-item-right">
                        <span>￥{{item.code}}</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Hongbao_record",
        components: {},
        data() {
            return {
                hbName:'',
                hbTouxiang:'',
                people:'',
            }
        },


        beforeRouteEnter(to, from, next) {
            next()
        },
        beforeRouteLeave(to, from, next) {
            next()
        },
        created() {
            this.hbName=this.$route.params.name;
            this.hbTouxiang=this.$route.params.src;
            this.people=this.$route.params.people;

        },
        mounted() {

        },
        methods: {
            bank(){
                this.$router.go(-1)
            }
        },

    }

</script>

<style scoped lang="less">
    .top{
        height: 8vh;
        background-color: rgb(242,84,66);
        width: 94%;
        padding: 0 3%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color:#fff8c3 ;
    }
    .content{
        .hb_name{
            width: 100%;
            height: 45%;
            background: url("../assets/img/hb_record_bg.png") no-repeat;
            background-size: 100%;

            .hongbao-title {
                width: 60%;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: center;
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
            .hongbao-jine{
                display: flex;
                /*justify-content: center;*/
                flex-wrap: wrap;
                width: 100%;
                color: rgb(255, 223, 175);
                .hongbao-jine-top,.hongbao-jine-bottom{
                    .jine{
                        font-size: 60px;
                    }
                    width: 100%;
                    text-align: center;
                }
            }
        }
        .hongba-time{
            text-align: center;
            height: 5%;
        }
        .hongbao-list{
            height: 50%;
            width: 100%;
            border-top: 1px solid #eeeeee;
            display: flex;
            flex-wrap: wrap;
            overflow-y: scroll;
            flex-direction: row-reverse;
            align-content: flex-start;
            .hongbao-item{
                height: 109px;
                width: 95%;
                border-bottom: 1px solid #eeeeee;
                display: flex;
                justify-content: space-between;
                .hongbao-item-left{
                    display: flex;
                    align-items: center;
                    .hongbao-item-left-img{
                        width: 66px;
                        height: 66px;
                        border-radius: 15px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;
                        margin-right: 20px;
                        img{
                            width: 60px;
                            height: 60px;
                        }
                    }
                    .hongbao-item-left-text{
                        font-size: 28px;
                        .name{

                        }
                        .time{
                            color: #999999;
                        }

                    }
                }
                .hongbao-item-right{
                    display: flex;
                    align-items: center;
                    padding-right: 10px;
                    font-size: 28px;

                }
            }
        }
    }

</style>
