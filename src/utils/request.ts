import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API || '/', // 接口基础路径
  timeout: 50000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

// 响应拦截器
service.interceptors.response.use(
  (res) => res.data, // 直接返回 data，不用 res.data.data
  (error) => Promise.reject(error)
)

export default service
