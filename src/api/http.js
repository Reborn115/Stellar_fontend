// 引入axios
import axios from 'axios';
// import { Message } from "element-ui";
// import router from '@/router'
import { Loading } from 'element-ui';
// 创建的axios的实列 instance
const instance = axios.create({
    baseURL: '', // 基准地址,也可代理路径
    timeout: 10000 // 超时时间
});
// 请求拦截
// 声明变量接收logding
let loadingInstance;
instance.interceptors.request.use(
    (config) => {
        // 设置请求头
        let token = localStorage.getItem('token');
        config.headers.Authorization = token;
        //设置logding配置 赋值
        loadingInstance = Loading.service({
            lock: true,
            text: '拼命加载中...',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });
        // 返回请求头
        return config;
    },
    (err) => {
        // 请求失败返回失败信息
        return Promise.reject(err);
    }
);

// 响应拦截
instance.interceptors.response.use(
    (res) => {
        // 响应成功则关闭loading加载
        loadingInstance.close();
        //返回响应数据
        return res;
    },
    (err) => {
        // 响应失败则关闭loading加载
        setTimeout(() => {
            loadingInstance.close();
        }, 1000);
        // 响应失败返回失败信息
        return Promise.reject(err);
    }
);
// 导出实例
export default instance;
