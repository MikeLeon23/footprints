/* 
这个文件里封装了网络相关的api
目的是为了避免在用到时，总是需要导入相关的插件，这样不仅开发时带来麻烦，而且后期维护时，也很麻烦
如果不幸遇到相关的插件不再维护了，需要重新更换相同功能的组件时，只需要在这个文件内重新封装就行了
其他使用这个api的文件不需要进行修改
*/

import axios from 'axios'
import qs from 'qs'

// 一个请求接口
export function request(config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: 'http://www.bufantec.com/api/test/user',
    timeout: 5000
  });

  instance.interceptors.request.use(config => {
    if (config.method.toLowerCase() === "post") {
      config.data = qs.stringify(config.data);
    }
    return config;
  }, error => {
    console.log(error);
  })

  instance.interceptors.response.use(result => {
    return result;
  }, error => {
    console.log(error);
  })

  // 2. 发送真正的网络请求
  return instance(config);  // 直接返回axios实例，因为axios实例其实是一个Promise实例，可以直接.then().catch()
}