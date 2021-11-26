import axios from 'axios'
import {message} from 'ant-design-vue'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json;charset=utf8"
  }
})
const source = axios.CancelToken.source()

request.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error);
})

request.interceptors.response.use(response => {
  if (response.data.code === 200) {
    message.info(response.data.message)
    return Promise.resolve(response)
  } else if (response.data.code === -200) {
    // 取消正在请求的其他需求
    source.cancel()
    message.error(response.data.msg)
    return Promise.resolve(response)
  }
}, error => {
  console.log(error);
  return Promise.resolve(1)
})

export default request
