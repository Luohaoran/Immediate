<template>
    <div>
        <Top title="充值记录"></Top>
        <div class="content">
            <div class="record-contend">
                <div class="body-header">
                    <div>金额</div>
                    <div>申请时间</div>
                    <div>到账时间</div>Trend
                </div>
                <div class="body-box">
                    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                        <van-list
                                v-model="loading"
                                :finished="finished"
                                finished-text="没有更多"
                                @load="onLoad"
                                :offset="10"
                        >
                            <template v-for="(item,index) in  recordList">
                                <div class="body-item"
                                     v-for="(jetm,jndex) in (item.length>0)?(item):(null)"
                                     :key="jndex+'a'+index">
                                    <div>{{jetm.money}}</div>
                                    <div>{{jetm.create_time}}</div>
                                    <div>{{jetm.hk_at}}</div>
                                </div>
                            </template>

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
                current_page: '',
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
            this.getRecharge(0, 1);
        },
        mounted() {
        },
        methods: {
            getRecharge(page, type) {
                this.$api.recharge({
                    page: page+1
                }).then(res => {
                    if (res.error_code === 1) {
                        res.result.data.forEach((item,i)=>{
                           item.create_time=item.create_time.split(' ')[0];
                           item.hk_at=item.hk_at.split(' ')[0]
                        });
                        if (type === 1) {
                            this.recordList = [];
                            this.recordList.push(res.result.data);
                            this.finished = false
                        } else {
                            this.recordList.push(res.result.data);
                        }
                        this.current_page = res.result.current_page;
                        if (!res.result.has_more) {
                            this.finished = true
                        }
                    } else {
                        this.$utils.Msg(res.msg);
                    }
                })
            },
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                    this.getRecharge(0,1)
                }, 500);
            },
            onLoad() {      //上拉加载
                setTimeout(() => {
                    if (!this.finished){
                        this.getRecharge(this.current_page,2);
                    }
                    this.loading = false;
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
                div{
                    text-align: center;
                    width: 33%;
                }
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
                    div{
                        text-align: center;

                        width: 33%;
                    }
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
