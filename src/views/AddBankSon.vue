<template>
    <div>
        <Top title="添加银行卡"></Top>
        <div class="content">
            <div class="from">
                <div>
                    <input type="text" placeholder="开户人名字" v-model="bank_username">
                </div>
                <div>
                    <input type="text" placeholder="卡号" v-model="bank_card">
                </div>
                <div class="bank-name">
                    <div class="show-content" @click="showSlect">
                        <div class="text">
                            {{checkValue}}
                        </div>
                        <img src="../assets/img/select_img.png" alt="">
                    </div>
                    <div class="select-box" v-show="selectVisible">
                        <div
                                class="select-item"
                                v-for="(item,index) in selectitem"
                                :key="index"
                                @click="checkSelect(item)"
                        >
                            <div>{{item}}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <input type="text" placeholder="开户行地址" v-model="bank_address">
                </div>
            </div>
            <div class="okBtn" @click="okBtn()">
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
            return {
                selectVisible:false,
                bank_username: '',
                checkValue: '请选择银行',
                bank_card: '',
                bank_name: '',
                bank_address: '',
                selectitem: ['邮政银行', '建设银行'],
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
            okBtn() {
                function luhnCheck(bankno) {
                    var lastNum = bankno.substr(bankno.length - 1, 1); //取出最后一位（与luhn进行比较）
                    var first15Num = bankno.substr(0, bankno.length - 1); //前15或18位
                    var newArr = new Array();
                    for (var i = first15Num.length - 1; i > -1; i--) { //前15或18位倒序存进数组
                        newArr.push(first15Num.substr(i, 1));
                    }
                    var arrJiShu = new Array(); //奇数位*2的积 <9
                    var arrJiShu2 = new Array(); //奇数位*2的积 >9
                    var arrOuShu = new Array(); //偶数位数组
                    for (var j = 0; j < newArr.length; j++) {
                        if ((j + 1) % 2 == 1) { //奇数位
                            if (parseInt(newArr[j]) * 2 < 9) arrJiShu.push(parseInt(newArr[j]) * 2);
                            else arrJiShu2.push(parseInt(newArr[j]) * 2);
                        } else //偶数位
                            arrOuShu.push(newArr[j]);
                    }

                    var jishu_child1 = new Array(); //奇数位*2 >9 的分割之后的数组个位数
                    var jishu_child2 = new Array(); //奇数位*2 >9 的分割之后的数组十位数
                    for (var h = 0; h < arrJiShu2.length; h++) {
                        jishu_child1.push(parseInt(arrJiShu2[h]) % 10);
                        jishu_child2.push(parseInt(arrJiShu2[h]) / 10);
                    }

                    var sumJiShu = 0; //奇数位*2 < 9 的数组之和
                    var sumOuShu = 0; //偶数位数组之和
                    var sumJiShuChild1 = 0; //奇数位*2 >9 的分割之后的数组个位数之和
                    var sumJiShuChild2 = 0; //奇数位*2 >9 的分割之后的数组十位数之和
                    var sumTotal = 0;
                    for (var m = 0; m < arrJiShu.length; m++) {
                        sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
                    }

                    for (var n = 0; n < arrOuShu.length; n++) {
                        sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
                    }

                    for (var p = 0; p < jishu_child1.length; p++) {
                        sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p]);
                        sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p]);
                    }
//计算总和
                    sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) + parseInt(sumJiShuChild2);

//计算luhn值
                    var k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;
                    var luhn = 10 - k;

                    if (lastNum == luhn) {
                        return true;
                    } else {
                        return false;
                    }
                }//银行卡正则
                let bank_card = this.bank_card,//卡号
                    bank_name = this.bank_name,//银行名称
                    bank_username = this.bank_username,//开户人名字
                    bank_address = this.bank_address,//开户行地址
                    obj = {
                        bank_card: bank_card,
                        bank_name: bank_name,
                        bank_username: bank_username,
                        bank_address: bank_address
                    };
                if (bank_card === '') {
                    this.$utils.Msg('卡号不能为空')
                } else if (!luhnCheck((bank_card.replace(/\s*/g, "")))) {
                    this.$utils.Msg('请输入正确的银行卡')
                } else if (bank_name === '') {
                    this.$utils.Msg('银行名称不能为空')
                } else if (bank_username === '') {
                    this.$utils.Msg('开户人名字不能为空')
                } else if (bank_address === '') {
                    this.$utils.Msg('开户行地址不能为空')
                } else {
                    this.$api.addBank(obj).then(res => {
                        if (res.error_code === 1) {
                            this.$utils.Msg('添加成功');
                            this.$router.go(-1)
                        } else {
                            this.$utils.Msg(res.msg);
                        }
                    })
                }
            },
            showSlect() {
                this.selectVisible = !this.selectVisible
            },//显示下拉选择
            checkSelect(item) {
                this.checkValue = item;
                this.selectVisible = !this.selectVisible
            },//下拉点击事件
        },

    }

</script>

<style scoped lang="less">
    .content {
        width: 100%;
        height: 92vh;

        .from {
            padding-top: 50px;
            height: 430px;
            /*border: 1px solid black;*/
            margin: 0 auto;
            width: 90%;

            .show-content {
                background-color: rgb(237, 237, 237);
                height: 50*2px;
                border-radius: 5px;
                padding: 0 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #666666;
                margin-bottom: 10px;
                .text{
                    width: 100%;
                    text-align: center;
                }

                img {
                    width: 15*2px;
                }
            }
            .select-box {
                position: fixed;
                width: 90%;

                .select-item {
                    border-radius: 5px;
                    height: 50*2px;
                    line-height: 50*2px;
                    padding: 0 20px;
                    background-color: rgb(171, 171, 171);
                    border-bottom: 1px solid white;
                    text-align: center;
                }
            }
            input {
                width: 100%;
                height: 100px;
                background-color: rgb(237, 237, 237);
                border-radius: 10px;
                margin-bottom: 10px;
                text-align: center;
            }
        }

        .okBtn {
            width: 90%;
            margin: 0 auto;
            height: 100px;
            line-height: 100px;
            margin-top: 50px;
            text-align: center;
            color: white;
            background-color: rgb(26, 175, 25);
        }

    }

</style>
