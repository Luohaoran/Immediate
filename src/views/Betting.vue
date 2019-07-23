<template>
    <div>
        <div class="content">
            <div class="my message-father">
                <img class="touxiang" src="../assets/img/touxiang.png" alt="">
                <div class="message-box">
                    你好啊！顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶
                </div>
            </div>
            <div class="he message-father">
                <img class="touxiang" src="../assets/img/touxiang.png" alt="">
                <div class="message-box">
                    你也好！顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶
                </div>
            </div>
        </div>
        <div class="input">

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
            return {}
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

    .input{
        height:7vh;
        background-color: #2c3e50;
    }
    .content {
        padding: 0 30px;
        height: 85vh;
        /*padding-top: 4vh;*/
        overflow: auto;
        background-color: rgb(237, 237, 237);

        .message-father {
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
                align-items: center;
                padding: 20px 20px;
                border-radius: 10px;
                position: relative;
                text-align: left;
            }
        }
        .my {
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
                top: 28px;
                border-top: 13px solid transparent;
                border-left: 20px solid rgb(149, 235, 105);
                border-bottom: 13px solid transparent;
            }
        }

        .he {
            display: flex;
            .message-box {
                margin-left: 30px;
                background-color: white;
            }
            .message-box:before {
                position: absolute;
                content: "";
                width: 0;
                height: 0;
                right: 100%;
                top: 28px;
                border-top: 13px solid transparent;
                border-right: 20px solid #ffffff;
                border-bottom: 13px solid transparent;
            }
        }
    }


</style>
