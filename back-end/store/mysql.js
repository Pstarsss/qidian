const mysql = require('mysql');
let pool = mysql.createPool({
    host : '123.56.129.223',
    user : 'root',
    password : 'root',
    database : 'px',
    connectionLimit: 10
});


// 数据增加操作
function add(sql,params){
  return new Promise((resolve,reject)=>{
    pool.getConnection((err,connection)=>{
      if(err)reject(err);
      else{
        connection.query(sql,params,function (err,results,field){
          if(err){
            reject(err);
          }else{
            resolve(results);
          }
        });
      }
      connection.release();
    });
  })
};

//数据的查询所有操作；
function find (sql = 'select * from booklist',params){
  return new Promise((resolve,reject)=>{
    // pool.getConnection((err,connection)=>{
    //   if(err) reject(err);
    //   else{
    //     connection.query(sql,params,function (err,results,field){
    //       if(err){
    //         reject(err);
    //       }else{
    //         resolve(results);
    //       }
    //     });
    //   };
    //   connection.release();
    // });
    pool.getConnection(function(err,connection){
      if(err){
        reject(err);
      }else{
        connection.query(sql,params,function(errs,results,field){
          if(errs){
            reject(errs);
          }else{
            resolve(results);
          }
        });
      };
      connection.release();
    });
  });
};


//数据的更新操作；
function update(sql,params){
  return new Promise((resolve,reject)=>{
    pool.getConnection((err,connection)=>{
      if(err) reject(err);
      else{
        connection.query(sql,params,function (err,results,field){
          if(err){
            reject(err);
          }else{
            resolve(results);
          }
        });
      };
      connection.release();
    });
  });
};

//数据的删除操作；
function deletess(sql,params){
  return new Promise((resolve,reject)=>{
    pool.getConnection((err,connection)=>{
      if(err) reject(err);
      else{
        connection.query(sql,params,function (err,results,field){
          if(err){
            reject(err);
          }else{
            resolve(results);
          }
        });
      };
      connection.release();
    });
  });
};

module.exports = { find,add,update,deletess };


