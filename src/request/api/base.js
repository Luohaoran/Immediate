/**
 * 接口域名的管理
 */
var url;

if (process.env.NODE_ENV === 'development') {//开发环境
    url = 'http://niuniu.com'
} else if (process.env.NODE_ENV === 'production') {//生产环境
    url = 'http://niuniu.com'
}
const base = {
    spread: url + '/api/spread', //我的推广界面
    center: url + '/api/center',//个人中心首页展示
    getBank: url + '/api/bank',//获取用户银行卡
    addBank: url + '/api/bank',//添加用户银行卡
    deleteBank: url + '/api/dbank',//删除用户银行卡
    dra: url + '/api/dra',//获取取款记录
    recharge: url + '/api/recharge',//获取用户充值记录
    re_d: url + '/api/re_d',//充值页面数据获取
    postRe_d: url + '/api/re_d',
    pay_qrCode: url + '/api/pay_qrCode',//获取扫码充值二维码
    dra_index: url+'/api/dra_index',//提款首页数据获取
    cus_qrCode:url+'/api/cus_qrCode',
};
export {base, url}

