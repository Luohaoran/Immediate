import {base} from './base'; //接口
import axios from '.././http'; //axios实例
const box = {
    login(params) {
        return axios.post(`${base.login}`, params);
    },
};


export default box;
