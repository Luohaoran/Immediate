/**
 * 接口域名的管理
 */
var url;
process.env.NODE_ENV === 'development'
    ?url = 'http://www.niuniu.com'
    :url = 'http://www.niuniu.com';
const base = {
    spread: url + '/api/spread', //我的推广界面
    center: url + '/api/center',//个人中心首页展示
    getBank: url + '/api/bank',//获取用户银行卡
    addBank: url + '/api/bank',//添加用户银行卡
    deleteBank: url + '/api/dbank',//删除用户银行卡
    dra: url + '/api/dra',//获取取款记录
    recharge: url + '/api/recharge',//获取用户充值记录
    re_d: url + '/api/re_d',//充值页面数据获取
    postRe_d: url + '/api/re_d',//充值页面数据获取
    cus_qrCode: url + '/api/cus_qrCode',//获取人工充值二维码
    dra_index: url + '/api/dra_index',//提款首页数据获取
    akf_qrCode: url + '/api/akf_qrCode',//获取客服二维码
    dra_send: url + '/api/dra_send',//申请提现
    token:url+'/api/wx/token',//获取token
    cookie:url+`/api/wx/cookie`,//测试token
};
export {base, url}

