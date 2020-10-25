import {} from './mutation-type.js'

export default{
  add(context,payload){
    return new Promise((resolve,reject)=>{
      context.state.bookrecords.push(payload);
      resolve('用户信息读取成功');
    })
  },
  change(context,payload){
    return new Promise((resolve,reject)=>{
      if(context.state.bookrecords.length){
        let index = context.state.bookrecords.findIndex((i)=>{
          return i.collections == payload.collections;
        });
        console.log(context.state.bookrecords);
        console.log(payload);
        context.state.bookrecords[index].title = payload.booktitle;
        context.state.bookrecords[index].Chapter = payload.Chapter;
        resolve('nice');
      }else{
        reject('刷新后vuex消失');
      }
      
    
     
    })
  }
}