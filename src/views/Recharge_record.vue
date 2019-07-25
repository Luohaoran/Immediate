<template>
    <div>
        <Top title="充值记录"></Top>
        <div class="content">
            <div class="record-contend">
                <div class="body-header">
                    <div>金额</div>
                    <div>申请时间</div>
                    <div>到账时间</div>
                </div>
                <div class="body-box">
                    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                        <van-list
                                v-model="loading"
                                :finished="finished"
                                @load="onLoad"
                                :offset="10"
                        >
                            <div class="body-item" v-for="n in count " :key="n">
                                <div>{{recordList.jine}}</div>
                                <div>{{recordList.shenqing_time}}</div>
                                <div>{{recordList.daozhang_tiem}}</div>
                            </div>
                        </van-list>
                    </van-pull-refresh>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Top from '../components/Top'

    export default {
        name: "Recharge_record",
        components: {Top},
        data() {
            return {
                count: 5,
                isLoading: false,
                loading: false,   //是否处于加载状态
                finished: false,  //是否已加载完所有数据
                recordList:
                    {
                        jine: '23元',
                        shenqing_time: '2016-6-26',
                        daozhang_tiem: '2016-6-26'
                    }

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
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                    this.count++;
                }, 500);
            },
            onLoad() {      //上拉加载
                setTimeout(() => {
                    this.count++;
                    this.loading = false;
                    if (this.count >= 30) {
                        this.finished = true;
                    }
                }, 2000);
            },
        },

    }

</script>

<style scoped lang="less">
    .content {
        height: 92vh;

        .record-contend {
            width: 100%;
            height: 100%;

            .body-header {
                height: 5%;
                background-color: rgb(237, 237, 237);
                width: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
            }

            .body-box {
                width: 100%;
                height: 95%;
                overflow-y: scroll;

                .body-item {
                    width: 100%;
                    height: 100px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    border-bottom: 1px solid #999999;
                }
            }
        }
    }

</style>
<style>
    .van-pull-refresh {
        padding-bottom: 160px;
    }
</style>
