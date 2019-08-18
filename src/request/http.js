import axios from "axios";
import qs from 'qs';
import cc from "../assets/js/cc";
import {url} from "./api/base";

function getToken() {
    cc.delLocal('token');
    // window.location.href = `${url}/api/wx/cookie`;//后端设置cookie
    window.location.href = `http://www.h86i.cn/api/wx/token`;//后端设置cookie
}

axios.create({
    timeout: 1000 * 10,
    withCredentials: true,
});

// 设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.withCredentials = true;//是否使用cookie

// /*下面添加请求拦截器*/
axios.interceptors.request.use(
    (config) => {
// 在发送请求之前做些什么
        config.headers['token'] = cc.getLocal('token');
        if (config.method === 'post') {
            config.data = qs.stringify(config.data);
        }
        return config;
    },
    (err) => {// 对请求错误做些什么
        return Promise.reject(err)
    }
);
// 添加响应拦截器
axios.interceptors.response.use(// 对响应数据做点什么
    (res) => {
        let code = res.data.error_code;
        if (code === 2) {//这里等于2就代表过期
            getToken();
        } else {
            return res.data
        }
    },
    (err) => {// 对响应错误做点什么
        // let status = err.response.status;//返回的状态码
        return Promise.reject(err)
    }
);
export default axios;
