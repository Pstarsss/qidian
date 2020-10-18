import axios from 'axios'

//实现网络请求的封装；


export function request(config){
  const instance = axios.create({
    baseURL :'/api',
    timeout : 5000
  });

  instance.interceptors.request.use(config=>{
    return config;
  },err=>{
    // console.log(err);
  })

  instance.interceptors.response.use(res =>{
    return res.data;
  }, err=>{
    console.log(err);
  })

  return instance(config);
}