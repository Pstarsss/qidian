const { response } = require('express');
let express = require('express');
let router = express.Router();
let sql = require('../store/mysql.js');
const Math = require('math');
// get 一般为查询请求
// post 一般为新增用户
// put  一般为修改信息；
// delete 一般为用户信息的删除操作；
let temp = '';
for(let i =0;i<6;i++){
  temp+=(Math.random()*10).toFixed(0);
}

router.get('/',function(req,res){
  res.send('welcome to my page');
});
router.get('/read/:id',function(req,res){
  let id = req.params.id;
  sql.find(`select * from book${id}`).then(results=>{
    res.send(results);
  })
});

router.get('/booklist',function(req,res){
  sql.find(`select * from booklist`).then(results=>{
    res.send(results);
  })
});
router.get('/booklist/:id',function(req,res){
  let id = req.params.id;
  sql.find(`select * from booklist${id}`).then(results=>{
    res.send(results);
  })
});

router.get('/detail/:id',(req,res)=>{
  let id = req.params.id;
  sql.find(`select * from booklist where id = ${id}`).then(results=>{
    res.send(results);
  });
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

router.get('/hotdiscuss',function(req,res){
  sql.find('select * from hotdiscuss').then(results=>{
    res.send(results);
  })
});

  
const Core = require('@alicloud/pop-core');

var client = new Core({
  accessKeyId: 'LTAI4G3rASxgYtmSgUKSaxJM',
  accessKeySecret: 'KxyLR92rsbtcit9K2foDbkifuS2rn6',
  endpoint: 'https://dysmsapi.aliyuncs.com',
  apiVersion: '2017-05-25'
});



var params = {
  "RegionId": "cn-hangzhou",
  "PhoneNumbers": "13970474703",
  "SignName": "我们的起点1",
  "TemplateCode": "SMS_204986016",
  "TemplateParam": `{\"code\":\"${temp}\"}`
}

var requestOption = {
  method: 'POST'
};
router.post('/validate',(req,res)=>{
  params.PhoneNumbers = req.body.iphone;
  client.request('SendSms', params, requestOption).then((result) => {
    res.send(temp);
  }, (ex) => {
    res.send(ex);
    console.log(ex);
  })
});
router.get('/ddd',(req,res)=>{
  sql.find('select * from user').then(re=>{
    res.send(JSON.stringify(re));
  })
})





module.exports = router;