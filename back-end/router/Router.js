const { response } = require('express');
let express = require('express');
let router = express.Router();
let sql = require('../store/mysql.js');
const Math = require('math');

// 对文件处理需要；
let multer = require('multer');
let storage = multer.diskStorage({
  destination:'public/upload',
  filename:function(req,file,cb){
    let fileFormat = (file.originalname).split('.');
    let filename = new Date().getTime();
    cb(null,filename +'.'+fileFormat[fileFormat.length-1]);
  }
});
let upload = multer({
  storage,
});
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
    res.send('-1');
  })
});
// 加载另外的章节内容
router.get('/read/:id/:pp',function(req,res){
  let id = req.params.id;
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
// 获取小说的目录
router.get('/booktitle/:id',function(req,res){
  let id = req.params.id;
  sql.find(`select * from booktitles where id = ${id}`).then(results=>{
    res.send(results);
  })
});

//或指定条数的数据;
router.get('/booklist/px/:num',function(req,res){
  let num = req.params.num;
  sql.find(`select * from booklist limit ${num}`).then(results=>{
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

// 详情页的评论;
router.post('/detaildiscuss',(req,res)=>{
  sql.find(`select * from dicsuss1`).then(results=>{
    res.send(results);
  });
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

// 增加finddiscuss的评论
router.post('/adddiscuss',function(req,res){
  let {headimg,name,tag,content,time,image,likes,reviews} = req.body.value;
  sql.find(`insert into discuss1 (headimg,name,tag,content,image,time,likes,reviews) 
   value('${headimg}','${name}','${tag}','${content}','${image}','${time}','${likes}','${reviews}')`).then(results=>{
    res.send(results);
  });

});

// 删除discuss1表的评论
router.post('/delete/discuss',function(req,res){
  let temp = req.body.index;
  sql.find(`delete from discuss1 where discussid = ${temp}`).then(results=>{
    res.send("删除成功");
  })
});

// sql.find(`update discuss1 set likes=? where discussid = ?`
//     , [likes,discussid])
//     .then((result) => {
//       console.log(result);
//         res.send("点赞成功");
//     }).catch((err) => {
//         console.log(err);
//     })
//修改discuss1表的点赞
router.put('/update/discuss', (req, res) => { 
    let {content,headimg,image,likes,name,reviews,tag,time,discussid} = req.body;
    console.log({content,headimg,image,likes,name,reviews,tag,time,discussid});
    sql.find(`update discuss1 set likes = ? where discussid = ?`
    , [likes,discussid])
    .then((result) => {
      console.log(result);
        res.send("点赞成功");
    }).catch((err) => {
        console.log(err);
    })
    // sql.find(`update discuss1 set content=?,headimg=?,image=?,likes=?,name=?,reviews=?,tag=?,time=? where discussid = ?`
    // , [[content,headimg,image,likes,name,reviews,tag,time],discussid])
    // .then((result) => {
    //   console.log(result);
    //     res.send("点赞成功");
    // }).catch((err) => {
    //     console.log(err);
    // })
})
// 上传文件的处理;
router.post('/file/upload',upload.single('file'),function(req,res){
  let file = req.file;
  console.log(file);
  let fileName = file.filename;
  let avatarUrl = '/upload/'+fileName;
  console.log(avatarUrl);
  res.send('----');
});


// 搜索
router.post('/search',function(req,res){
  sql.find('select * from hotdiscuss').then(results=>{
    res.send(results);
  })
});





// 点击加入书架的操作1
router.post('/getchaptertitle',function(req,res){
  let {collections,Chapter,userid} = JSON.parse(JSON.stringify(req.body)); 

  sql.find(`select * from userbookshelf where userid = ${userid} and collections = ${collections}`).then(results1=>{
      if(results1.length){

        sql.find("select title from book"+ collections + " where id = "+Chapter).then(results=>{
          if(results){
            let temp = results[0];
            temp.has = true;

            res.send(temp);
          }
          else{
            res.send("-1");
          }
        });
      }else{

        sql.find("select title from book"+ collections + " where id = "+Chapter).then(results=>{

          if(results){
            let temp = results[0];
            temp.has = false;
  
            res.send(temp);
          }
          else{
            res.send("-1");
          }
        });
      }
      // sql.find("select title from book"+ collections + " where id = "+Chapter).then(results=>{
        
      //   if(results){
      //     let temp = results[0];
      //     temp.has = true;
      //     res.send(temp);
      //   }
      //   else{
      //     res.send("-1");
      //   }
      // });

  }).catch(()=>{
    console.log("meiyou")
    // sql.find("select title from book"+ collections + " where id = "+Chapter).then(results=>{
    //   console.log(2);
    //   if(results){
    //     let temp = results[0];
    //     temp.has = false;
    //     res.send(temp);
    //   }
    //   else{
    //     res.send("-1");
    //   }
    // });
  })
});

// 点击加入书架的操作2
router.post('/adduserbook',function(req,res){
  let {
    userid,
    collections,
    Chapter,
    image,
    bookname,
    author,
    booktitle
  } = JSON.parse(JSON.stringify(req.body.temp)); 
  sql.find(`insert into userbookshelf set ?`,[{
    'userid':userid,
    'collections':collections,
    'Chapter':Chapter,
    'image':image,
    'bookname':bookname,
    'author':author,
    'booktitle':booktitle
  },userid]).then(res1=>{
    res.send('添加成功');
  })
});

// 点击加入书架的操作3
router.post('/updateuserbook',function(req,res){
  let {
    userid,
    collections,
    Chapter,
    booktitle
  } = JSON.parse(JSON.stringify(req.body)); 
  sql.find(`update userbookshelf set ? where userid = ${userid} and collections = ${collections}`,[{
    'Chapter':Chapter,
    'booktitle':booktitle
  },userid,collections]).then(res1=>{
    // console.log(res1);
    res.send('修改成功');
  })
});

router.post('/delete/book',(req,res)=>{
  let {userid,collections} =req.body;
  sql.find(`delete from userbookshelf where userid = ${userid} and collections =${collections} `).then(re=>{
    res.send('删除成功');
  });
});


// 获取用户书架的信息
router.post('/userbookshelf',function(req,res){
  let temp = JSON.parse(JSON.stringify(req.body)); 
  
  res.send('111');
  // sql.find('select * from hotdiscuss').then(results=>{
  //   res.send(results);
  // })
});

// 用户登录后获取的书架信息;
router.post('/userbasic',function(req,res){
  let {userid} = req.body;
  sql.find(`select * from userbookshelf where userid = ${userid}`).then(results=>{
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
    // console.log(JSON.parse(JSON.stringify(re)));
    res.send(re);
  }).catch((err)=>{
    res.send('登录失败');
  })
});

//用户验证码登录
router.post('/validatelogin',(req,res)=>{
  let {iphone} = req.body;
  sql.find('select * from user where iphone = ?',iphone).then((re)=>{
    // console.log(JSON.parse(JSON.stringify(re)));
    res.send(re);
  }).catch((err)=>{
    res.send('登录失败');
  })
});

//密码修改
router.post('/changepassword',(req,res)=>{
  let {password,iphone} = req.body;
  sql.find('update user set ? where iphone = ?',[{'password':password},iphone]).then(re=>{
    res.send('密码修改成功');
  }).catch(eer=>{
    res.send('修改失败');
  });
});


const Core = require('@alicloud/pop-core');
const { log } = require('math');

var client = new Core({
  accessKeyId: 'LTAI4G9pA3GqufjtMwAANbBa',
  accessKeySecret: 'g6NnMidKTsoERhoSjXcpXt1Ma3xNmP',
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
// 获取所有用户信息；
router.get('/ddd',(req,res)=>{
  sql.find('select * from user').then(re=>{
    res.send(JSON.stringify(re));
  })
})

// 获取所有的评论;
router.get('/detaildiscuss',(req,res)=>{
  sql.find('select * from discuss1').then(re=>{
    res.send(JSON.stringify(re));
  })
})



module.exports = router;