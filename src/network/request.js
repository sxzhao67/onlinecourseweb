import axios from 'axios'

export function request(config) {
   //创建axios的实列
  const instance = axios.create({
    baseURL:'http://localhost:8181',
    timeout:5000
  })

  //2axios的拦截器
  //2.1请求拦截器的作用
  instance.interceptors.request.use(config =>{
    return config
  },err => {

  })
  //响应拦截
  instance.interceptors.response.use(res =>{
    return res.data
  },err =>{
    console.log(err);
  })

  //3发送真正的网络请求
  return instance(config)
}
