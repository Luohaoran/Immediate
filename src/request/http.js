import axios from "axios";
import qs from 'qs';
import router from '../router';

axios.create({timeout: 1000 * 10});
// 设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.withCredentials = true;//是否使用cookie

// /*下面添加请求拦截器*/
axios.interceptors.request.use(
    (config) => {
// 在发送请求之前做些什么
        if (config.method === 'post') {
            config.data = qs.stringify(config.data)
        }
        return config
    },
    (error) => {// 对请求错误做些什么

        return Promise.reject(error)
    }
);
// 添加响应拦截器
axios.interceptors.response.use(// 对响应数据做点什么
    (response) => {
        return response.data
    },
    (error) => {// 对响应错误做点什么
        // let status=error.response.statusll;//返回的状态码
        // utils.Msg('请求超时');
        return Promise.reject(error)
    }
);


// axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
//     var config = err.config;
//     //如果配置不存在或未设置重试选项，则返回错误信息
//     if(!config || !config.retry) return Promise.reject(err);
//
//     //设置变量即跟踪重试次数
//     config.__retryCount = config.__retryCount || 0;
//
//     // 检查我们是否已经超过了总重试次数
//     if(config.__retryCount >= config.retry) {
//         // 返回错误信息
//         return Promise.reject(err);
//     }
//
//     // 重试次数加1
//     config.__retryCount += 1;
//
//     // 创建延时器等待发送重试请求
//     var backoff = new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve();
//         }, config.retryDelay || 1);
//     });
//
//     // 返回调用AXIOS来重试请求
//     return backoff.then(function() {
//         return axios(config);
//     });
// });

export default axios;
