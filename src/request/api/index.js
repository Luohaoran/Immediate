import {base} from './base'; //接口
import axios from '.././http'; //axios实例
const box = {
    spread() {
        return axios.get(`${base.spread}`);
    },
    center(){
        return axios.get(`${base.center}`);
    },
    bank(){
        return axios.get(`${base.bank}`);
    },
    dra(params) {
        return axios.get(`${base.dra}`,{
            params:params
        });
    },
    recharge(params){
        return axios.get(`${base.recharge}`,{
            params:params
        });
    },
};
export default box;
