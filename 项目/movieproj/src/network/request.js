import axios from 'axios'

export function request(config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/mn',
    timeout: 5000
  });

  // 2. axios拦截器
  // 2.1 请求拦截
  instance.interceptors.request.use(config => {
    // 请求拦截器的作用
    // 1. 比如config中的一些信息不符合服务器的要求
    // 2. 比如每次发送网络请求时, 都希望在界面中显示请求转圈圈
    // 3. 某些网络请求, 比如登录(token), 必须携带一些特殊的信息
    return config;
  }, error => {
    console.log(error);
  })

  // 2.2 响应拦截
  instance.interceptors.response.use(res => {
    return res.data;
  }, error => {
    console.log(error);
  })

  // 3. 发送请求, axios实例instance本身就是一个Promise, 可以直接.then()
  return instance(config);
}