import axios from 'axios'
import TokenService from '@/services/TokenService'
import {Message} from "element-ui";

const ApiService = axios.create({
    baseURL: '/api',// baseUrl会自动加到请求地址上
    timeout: 3000
})
// 添加请求拦截器
ApiService.interceptors.request.use((config) => {
    // 在请求之前做什么,获取并设置token
    config.headers['token'] = TokenService.getToken('token')
    return config
}, (error) => {
    return Promise.reject(error)
})
// 添加响应拦截器
ApiService.interceptors.response.use((response) => {
    // 响应数据做什么
    console.log(response)
    let {status, message} = response.data
    if (status !== "success") {
        Message({message: message || 'error', type: "warning"})
    }
    // MARK:需要返回response，否则后面无法使用
    return response
}, (error) => {
    return Promise.reject(error)
})

export default ApiService