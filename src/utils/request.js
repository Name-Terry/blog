/*
 * @Author: trry
 * @Date: 2020-10-22 15:41:17
 * @LastEditors: trry
 * @LastEditTime: 2020-10-25 14:37:15
 * @Description: file content
 */
import axios from 'axios'
import Vue from 'vue'
import store from '../store/index'

const service = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 15000
})

service.interceptors.request.use(
    config => {
        let token = store.state.token.token
        if (token) {
            let sp = '?'
            if (config.url.indexOf('?') >= 0) {
                sp = '&'
            }
            config.url = config.url + sp + 'access_token=' + token
        }
        return config
    },
    error => {
        return error
    }
)

service.interceptors.response.use(
    response => {
        response.data
        return response
    },
    error => {
        let message
        switch (error.response && error.response.status) {
            case 401:
                message = 'Token错误'
                break
            default:
                message = error.response.data.message
                break
        }
        Vue.prototype.$message({
            message: message,
            type: 'error'
        })
        return Promise.reject('error')
    }
)

export default service
