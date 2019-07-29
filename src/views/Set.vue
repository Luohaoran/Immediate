<template>
    <div class="Set">
        <Top title="绑定手机号"></Top>
        <div class="content">
            <div class="from">
                <input type="text" placeholder="手机号">
                <input type="text" placeholder="密码">
                <input type="text" placeholder="确认密码">
            </div>
            <div class="button">确认</div>
        </div>
    </div>
</template>

<script>
    import Top from '../components/Top'
    export default {
        name: "Set",
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
        height: 92vh;
        width: 100%;
        .from{
            margin: 0 auto;
            margin-top: 10%;
            width: 90%;
            /*border: 1px solid black;*/
            height: 40%;
            input{
                height: 100px;
                width: 100%;
                text-align: center;
                background-color: rgb(237,237,237);
                margin-bottom: 20px;
                border-radius: 10px;
            }
        }
        .button{
            width: 90%;
            margin: 0 auto;
            height:100px;
            line-height: 100px;
            color: white;
            border-radius: 10px;
            text-align: center;
            background-color:rgb(26,173,25) ;
        }
    }
</style>
