import axios from "axios";
import qs from 'qs';
import cc from "../assets/js/cc";
import {url} from "./api/base";

axios.create({
    timeout: 1000 * 10,
    withCredentials: true,
});
// 设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.withCredentials = true;//是否使用cookie

// /*下面添加请求拦截器*/
axios.interceptors.request.use(
    (config) => {
// 在发送请求之前做些什么
        config.headers['token'] =cc.getLocal('token');
        if (config.method === 'post') {
            config.data = qs.stringify(config.data);
        }
        return config;
    },
    (error) => {// 对请求错误做些什么
        return Promise.reject(error)
    }
);
// 添加响应拦截器
axios.interceptors.response.use(// 对响应数据做点什么
    (response) => {
        let code=response.data.error_code;
        // if (code===2){//这里等于2就代表过期
        //     window.location.href = `${url}/api/wx/cookie`;//后端设置cookie
        // }else {
            return response.data

        // }
    },
    (error) => {// 对响应错误做点什么
        // let status=error.response.statusll;//返回的状态码
        // utils.Msg('请求超时');
        return Promise.reject(error)
    }
);
export default axios;
