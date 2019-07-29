/**
 * 接口域名的管理
 */
var url;

if (process.env.NODE_ENV === 'development') {//开发环境
    url = 'http://niuniu.com'
} else if (process.env.NODE_ENV === 'production') {//生产环境
    url = 'https://result.eolinker.com/P1zbDugf82da306876a18a84afaaf7d55be75b4b0773629?uri='
}
const base = {
    spread: url + '/api/spread', //我的推广界面
    center: url + '/api/center',//个人中心首页展示
    bank: url + '/api/bank',//获取用户银行卡
    dra: url + '/api/dra',//获取取款记录
    recharge: url+'/api/recharge',//获取用户充值记录
};
export {base, url}

