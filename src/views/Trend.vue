<template>
    <div>
        <Top title="我的推广"></Top>
        <div class="content">
            <div class="header">
                <div class="header-item">
                    <span>今日推广</span>
                    <span>{{agentTodayCount}}人</span>
                </div>
                <div class="header-item">
                    <span>我的下级</span>
                    <span>{{count}}人</span>
                </div>
            </div>
            <div class="xiaji">下级列表</div>
            <div class="xiaji-body-content">
                <div class="body-header">
                    <div>昵称</div>
                    <div>加入时间</div>
                    <div>最后登陆时间</div>
                </div>
                <div class="body-box">
                    <div class="body-item" v-for="(item,index) in (xiajiList.length>0)?(xiajiList):(null)" :key="index">
                        <div>{{item.username}}</div>
                        <div>{{item.create_time}}</div>
                        <div>{{item.last_login_at}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Top from '../components/Top';

    export default {
        name: "Trend",
        components: {
            Top
        },
        data() {
            return {
                count:'',
                agentTodayCount:'',
                xiajiList: [
                    {
                        name: '你的眼泪',
                        tiem: '2016-6-26 16:21',
                        last_time: '2016-6-26 16:21'
                    },
                    {
                        name: '你的眼泪',
                        tiem: '2016-6-26 16:21',
                        last_time: '2016-6-26 16:21'
                    },
                    {
                        name: '你的眼泪',
                        tiem: '2016-6-26 16:21',
                        last_time: '2016-6-26 16:21'
                    },
                ]
            }
        },


        beforeRouteEnter(to, from, next) {
            next()
        },
        beforeRouteLeave(to, from, next) {
            next()
        },
        created() {
            this.$api.spread().then(res=>{
                if (res.error_code===1){
                    this.count=res.result.count;
                    this.agentTodayCount=res.result.agentTodayCount;
                    res.result.agent.forEach((item,i)=>{
                        item.create_time=item.create_time.split(' ')[0];
                        item.last_login_at=item.last_login_at.split(' ')[0]
                    });
                    this.xiajiList=res.result.agent;
                }else {
                    this.$utils.Msg(res.msg);
                }
            })

        },
        mounted() {

        },
        methods: {},

    }

</script>

<style scoped lang="less">
    .content {
        height: 92vh;
        width: 100%;

        .header {
            text-align: center;
            width: 100%;
            height: 250px;
            background-color: rgb(237, 237, 237);
            display: flex;
            font-weight: bolder;

            .header-item {
                width: 50%;
                display: flex;
                flex-wrap: wrap;

                span {
                    display: block;
                    width: 100%;
                    height: 125px;
                    line-height: 125px;
                }
            }
        }

        .xiaji {
            height: 60px;
            line-height: 60px;
            width: 92%;
            padding: 0 4%;
        }

        .xiaji-body-content {
            width: 100%;

            .body-header {
                height: 60px;
                background-color: rgb(237, 237, 237);
                width: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                div{
                    width: 33%;
                    text-align: center;
                }
            }
            .body-box {
                width: 100%;
                .body-item {
                    width: 100%;
                    height: 100px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    border-bottom: 1px solid #999999;
                    div{
                        text-align: center;
                        width: 33%;
                    }
                }
            }
        }
    }
</style>
