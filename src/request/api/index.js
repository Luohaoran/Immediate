import {base} from './base'; //接口
import axios from '.././http'; //axios实例

export default {
    spread() {
        return axios.get(`${base.spread}`);
    },
    center() {
        return axios.get(`${base.center}`);
    },
    getBank() {
        return axios.get(`${base.getBank}`);
    },
    addBank(params) {
        return axios.post(`${base.addBank}`, params);
    },
    deleteBank(params) {
        return axios.get(`${base.deleteBank}`, {params: params});
    },
    dra(params) {
        return axios.get(`${base.dra}`, {params: params});
    },
    recharge(params) {
        return axios.get(`${base.recharge}`, {params: params});
    },
    re_d() {
        return axios.get(`${base.re_d}`);
    },
    postRe_d(params) {
        return axios.post(`${base.postRe_d}`, params);
    },
    cus_qrCode() {
        return axios.get(`${base.cus_qrCode}`);
    },
    dra_index() {
        return axios.get(`${base.dra_index}`);
    },
    akf_qrCode() {
        return axios.get(`${base.akf_qrCode}`);
    },
    dra_send(params) {
        return axios.post(`${base.dra_send}`, params);
    },
    token(){
        return axios.get(`${base.token}`);
    },
    cookie(){
        return axios.get(`${base.cookie}`);
    }
};
