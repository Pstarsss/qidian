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
  }).catch(err=>{
    res.send(-1);
  })
});
router.get('/read/:id/:pp',function(req,res){
  let id = req.params.id;
  console.log(req.params);
  console.log(req.params);
  let pp = req.params.pp;
  sql.find(`select * from book${id} where id = ${pp}`).then(results=>{
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

router.get('/booktitle/:id',function(req,res){
  let id = req.params.id;
  sql.find(`select * from booktitles where id = ${id}`).then(results=>{
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
// 获取finddetail
router.get('/finddetail/:id',function(req,res){
  let id = req.params.id;

  sql.find(`select * from hotdiscuss where discussid = ${id}`).then(results=>{
    res.send(results);
  })
});


// 搜索
router.post('/search',function(req,res){
  sql.find('select * from hotdiscuss').then(results=>{
    res.send(results);
  })
});


// 用户登录后获取的书架信息;
router.post('/userbasic',function(req,res){
  let {userid} = req.body;
  sql.find(`select * from userbookshelf where userid = ${userid}`).then(results=>{
    console.log(results);
    res.send(JSON.parse(JSON.stringify(results)));
  })
});

// 用户注册
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
    console.log(JSON.parse(JSON.stringify(re)));
    res.send(re);
  }).catch((err)=>{
    res.send('登录失败');
  })
});


//密码修改
router.put('/changepassword',(req,res)=>{
  let {password2,iphone} = req.body;
  sql.find('update user set ? where iphone = ?',[{'password':password2},iphone]).then(re=>{
    res.send('密码修改成功');
  }).catch(eer=>{
    res.send('修改失败');
  });
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

router.get('/detaildiscuss',(req,res)=>{
  sql.find('select * from discuss1').then(re=>{
    res.send(JSON.stringify(re));
  })
})



module.exports = router;