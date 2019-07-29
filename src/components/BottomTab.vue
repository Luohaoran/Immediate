<template>
    <div class="bottom-tab">
        <div class="tab-item" @click="switchTo('/')">
            <img :src="'/' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" alt="游戏大厅">
            <span :class="{on: '/' === $route.path}">投注</span>
        </div>
        <div class="tab-item" @click="switchTo('/Service')">
            <img :src="'/Service' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" alt="开奖中心">
            <span :class="{on: '/Service' === $route.path}">客服</span>
        </div>
        <div class="tab-item" @click="switchTo('/Finance')">
            <img :src="'/Finance' === $route.path ? tabBarImgArr[2].selected : tabBarImgArr[2].normal" alt="投注查询">
            <span :class="{on: '/Finance' === $route.path}">财务</span>
        </div>
        <div class="tab-item" @click="switchTo('/My')">
            <img :src="'/My' === $route.path ? tabBarImgArr[3].selected : tabBarImgArr[3].normal" alt="我的账户">
            <span :class="{on: '/My' === $route.path}">我的</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bottomTab",
        data() {
            return {
                tabBarImgArr: [   //图片切换
                    {
                        normal: require('../assets/img/Betting.png'),
                        selected: require('../assets/img/Betting_ckeck.png')
                    },
                    {
                        normal: require('../assets/img/service.png'),
                        selected: require('../assets/img/service_check.png')
                    },
                    {
                        normal: require('../assets/img/Finance.png'),
                        selected: require('../assets/img/Finance_check.png')
                    },
                    {
                        normal: require('../assets/img/my.png'),
                        selected: require('../assets/img/my_check.png')
                    }
                ],
            }
        },
        methods: {
            switchTo(path) {
                this.$router.push(path)
            }
        }
    }
</script>

<style scoped lang="less">
    .bottom-tab {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 120px;
        /*padding-top: 30px;*/
        display: flex;
        /*flex-wrap: nowrap;*/
        justify-content: space-around;
        align-items: center;
        text-align: center;
        background: rgb(246, 246, 247);
        /*background: #c2c2c2;*/
        .tab-item {
            margin-top: 5px;
            font-size: 14px;
            display: flex;
            flex-direction: column;
            /*align-items: center;*/
            color:#999999;
            span {
                margin-top: 5px;
                display: inline-block;
                font-size: 24px;
            }
        }
        .tab-item > img {
            width: 50px;
            margin: 0 auto;
        }
        .on {
            color: rgb(1, 192, 95);
        }
    }

</style>
