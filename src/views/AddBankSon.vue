<template>
    <div>
        <Top title="添加银行卡"></Top>
        <div class="content">
            <div class="from">
                <input type="text" placeholder="收款人姓名">
                <input type="text" placeholder="卡号">
                <input type="text" placeholder="开户行">
                <input type="text" placeholder="开户行地址">
            </div>
            <div class="okBtn">
                确认

            </div>
        </div>
    </div>
</template>
<script>
    import Top from '../components/Top'
    export default {
        name: "AddBankSon",
        components: {
            Top
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
    .content{
        width: 100%;
        height: 92vh;
        .from{
            padding-top: 50px;
            height: 430px;
            /*border: 1px solid black;*/
            margin: 0 auto;
            width: 90%;
            input{
                width: 100%;
                height: 100px;
                background-color: rgb(237,237,237);
                border-radius: 10px;
                margin-bottom: 10px;
                text-align: center;
            }
        }
        .okBtn{
            width: 90%;
            margin: 0 auto;
            height: 100px;
            line-height: 100px;
            margin-top: 50px;
            text-align: center;
            color: white;
            background-color: rgb(26,175,25);
        }

    }

</style>
