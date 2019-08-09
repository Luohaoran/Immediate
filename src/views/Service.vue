<template>
    <div>
        <div class="content">
            <div class="add">
                <img src="../assets/img/add_service.png" alt="">
                <span>请添加客服</span>
            </div>
            <div class="qq">
                <div class="qq-title">
                    <img src="../assets/img/qq_title_img.png" alt="">
                    <span>QQ二维码</span>
                </div>
                <div class="qq-img">
                    <img :src="qqImg" alt="">
                </div>
            </div>
            <div class="qq">
                <div class="qq-title">
                    <img src="../assets/img/wx_title_img.png" alt="">
                    <span>微信二维码</span>
                </div>
                <div class="qq-img">
                    <img :src="wxImg" alt="">
                </div>
            </div>
        </div>
        <bottom-tab/>
    </div>
</template>

<script>
    import {url} from '../request/api/base'
    import BottomTab from '../components/BottomTab'

    export default {
        name: "Service",
        components: {
            BottomTab,
        },
        data() {
            return {
                qqImg:'',
                wxImg:'',
            }
        },


        beforeRouteEnter(to, from, next) {
            next()
        },
        beforeRouteLeave(to, from, next) {
            next()
        },
        created() {
            this.getCus_qrCode();
        },
        mounted() {

        },
        methods: {
            getCus_qrCode(){
                this.$api.akf_qrCode().then(res=>{
                    if (res.error_code===1){
                        this.qqImg=url+'/'+res.result.qq_qrCode;
                        this.wxImg=url+'/'+res.result.wx_qrCode;
                    }
                })
            }
        },

    }

</script>

<style scoped lang="less">
    .content {
        height: 85vh;
        padding-top: 7vh;

        .add, .qq-title, .wx-title {
            padding-left: 25%;
            width: 50%;
            text-align: center;
            margin: 0 auto;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            img {
                width: 34px;
                margin-right: 10px;
            }

        }
        .qq{
            margin-top: 50px;
            width: 100%;
            .qq-img{
                width: 200*2px;
                margin: 0 auto;
                height: 200*2px;
                display: flex;
                align-items: center;
                justify-content: space-around;
                background:rgb(231,231,231) ;
                img{
                    width: 180*2px;
                    height: 180*2px;
                }
            }
        }
    }

</style>
