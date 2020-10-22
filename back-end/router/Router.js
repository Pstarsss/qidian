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
// 单本小说的章节内容
router.get('/read/:id',function(req,res){
  let id = req.params.id;
  sql.find(`select * from book${id}`).then(results=>{
    res.send(results);
  })
});

//所有小说list
router.get('/booklist',function(req,res){
  sql.find(`select * from booklist`).then(results=>{
    res.send(results);
  })
});

//指定表的list
router.get('/booklist/:id',function(req,res){
  let id = req.params.id;
  sql.find(`select * from booklist${id}`).then(results=>{
    res.send(results);
  })
});

// 详情页面数据获取; 单本小说的基本信息获取
router.get('/detail/:id',(req,res)=>{
  let id = req.params.id;
  sql.find(`select * from booklist where id = ${id}`).then(results=>{
    res.send(results);
  });
});


// 获取的小说目录信息；
router.get('/booktitle',function(req,res){
  sql.find('select * from booktitles').then(results=>{
    res.send(results);
  })
});


// 获取select的推荐信息；
router.get('/recommend',function(req,res){
  sql.find('select * from recommend').then(results=>{
    res.send(results);
  })
})

//获取find的评论信息；
router.get('/hotdiscuss',function(req,res){
  sql.find('select * from hotdiscuss').then(results=>{
    res.send(results);
  })
});
<<<<<<< HEAD

// 用户注册
=======
router.get('/finddetail/:id',function(req,res){
  let id = req.params.id;
  sql.find(`select * from hotdiscuss where discussid = ${id}`).then(results=>{
    console.log(results);
    res.send(results);

  }).catch(err=>{
     res.send('-1');
  })
});

>>>>>>> 95da0d1098205619861e0f64672724682592b9db
router.post('/post',(req,res)=>{
  let {iphone,password,username} = req.body;
  sql.find(`select * from user`).then((rr)=>{
    let {iphones,usernames} = rr;
  })
    sql.add(`insert into user (iphone,password,username) values  (${iphone},${password},'${username}')`).then(re=>{
      res.send('恭喜,注册成功');
  
})

  


  
});

//用户登录
router.post('/login',(req,res)=>{
  let {iphone,password } = req.body;
  sql.find('select * from user where iphone = ? and password = ?',[iphone,password]).then((re)=>{
    console.log(re);
  }).catch((err)=>{
    console.log(err);
  })
  res.send('11');
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
// 用户手机验证码
router.post('/validate',(req,res)=>{
  params.PhoneNumbers = req.body.iphone;
  client.request('SendSms', params, requestOption).then((result) => {
    res.send(temp);
  }, (ex) => {
    res.send(ex);
    console.log(ex);
  })
});
// 获取所以用户信息；
router.get('/ddd',(req,res)=>{
  sql.find('select * from user').then(re=>{
    res.send(JSON.stringify(re));
  })
})





module.exports = router;