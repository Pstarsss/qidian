import {} from './mutation-type.js'

export default{
  add(context,payload){
    return new Promise((resolve,reject)=>{
      context.state.bookrecords.push(payload);
      resolve('用户信息读取成功');
    })
  }
}