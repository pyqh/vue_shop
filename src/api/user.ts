import axios from 'axios'
import type { AxiosResponse } from 'axios'
import type { User, UserService } from '@/types'

axios.defaults.baseURL = 'https://www.fastmock.site/mock/94a0081c6a4ffea637eba056e5d115ee/'

// 拦截器
axios.interceptors.request.use((config) => {
  // 如果 本地存储有token 使用token到请求头
  const token = sessionStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
axios.interceptors.response.use((response) => {
  // 如果 response.data.token 保存token
  if (response.data.token) {
    sessionStorage.setItem('token', response.data.token)
  }
  return response
})

//登入
export const handleLogin = (data: User): Promise<any> => {
  return axios
    .post('/api/login', data)
    .then((res: AxiosResponse) => {
      return res.data
    })
    .catch((res) => {
      return res.message
    })
}
//发送验证码
export const sendCode = (data: string): Promise<any> => {
  return axios
    .post('/api/sendCode', data)
    .then((res: AxiosResponse) => {
      return res.data
    })
    .catch((res) => {
      return res.message
    })
}

//注册
export const registerAccount = (data: UserService): Promise<any> => {
  return axios
    .post('/api/register', data)
    .then((res: AxiosResponse) => {
      return res.data
    })
    .catch((res) => {
      return res.message
    })
}
//重置密码
export const resetPassword = (data: UserService): Promise<any> => {
  return axios
    .post('/api/reset', data)
    .then((res: AxiosResponse) => {
      return res.data
    })
    .catch((res) => {
      return res.message
    })
}
