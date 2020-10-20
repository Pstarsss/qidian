const { response } = require('express');
let express = require('express');
let router = express.Router();
let sql = require('../store/mysql.js');


// get 一般为查询请求
// post 一般为新增用户
// put  一般为修改信息；
// delete 一般为用户信息的删除操作；

router.get('/',function(req,res){
  res.send('welcome to my page');
})

router.get('/booklist/:id',function(req,res){
  let id = req.params.id;
  sql.find(`select * from booklist${id}`).then(results=>{
    res.send(results);
  })
});
router.get('/booktitle',function(req,res){
  sql.find('select * from booktitles').then(results=>{
    res.send(results);
  })
});

router.get('/recommend',function(req,res){
  sql.find('select * from recommend').then(results=>{
    res.send(results);
  })
})








module.exports = router;