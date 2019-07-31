import {base} from './base'; //接口
import axios from '.././http'; //axios实例
const box = {
    spread() {
        return axios.get(`${base.spread}`);
    },
    center(){
        return axios.get(`${base.center}`);
    },
    getBank(){
        return axios.get(`${base.getBank}`);
    },
    addBank(params){
        return axios.post(`${base.addBank}`,params);
    },
    deleteBank(params){
        return axios.get(`${base.deleteBank}`,{params:params});
    },
    dra(params) {
        return axios.get(`${base.dra}`,{params:params});
    },
    recharge(params){
        return axios.get(`${base.recharge}`,{params:params});
    },
    re_d(){
        return axios.get(`${base.re_d}`);
    },
    postRe_d(params){
        return axios.post(`${base.postRe_d}`,params);
    },
    pay_qrCode(){
        return axios.get(`${base.pay_qrCode}`);
    },
    dra_index(){
        return axios.get(`${base.dra_index}`);
    },
    cus_qrCode(){
        return axios.get(`${base.cus_qrCode}`);
    }

};
export default box;
