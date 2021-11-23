import axios from 'axios'
import {message} from 'ant-design-vue'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json;charset=utf8"
  }
})

request.interceptors.request.use(config => {
  console.log(config);
})

request.interceptors.response(response => {
  console.log(response);
  message.info('请求成功')
  message.error('请求失败')
  return Promise.resolve(response)
}, error => {
  console.log(error);
})

export default request
