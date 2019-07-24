<template>
    <div class="top">
        <div class="img" @click="bank()"></div>
        <div class="top-box">
            <div class="title">{{title}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Top",
        methods: {
            bank() {
                this.$router.go(-1);
            },
        },
        props: [
            'title',//标题
        ],
    }
</script>

<style scoped lang="less">
    .top {
        width: 100%;
        height: 8vh;
        line-height: 120px;
        color: black;
        text-align: center;
        background: white;

        .img {
            margin-top: 35px;
            margin-right: 40px;
            background: url(../assets/img/pageback.png) no-repeat;
            background-size: 50px 50px;
            width: 50px;
            height: 50px;
            position: absolute;
            left: 30px;
        }
        .top-box {
            position: absolute;
            right: 0;
            width: 70%;
            display: flex;
            align-items: center;
            .title {
                width: 58%;
                font-size: 34px;
                padding-top: 10px;
                height: 110px;
                text-align: center;
            }
        }
    }

</style>
