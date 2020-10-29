const express = require('express');
const app = new express();
const router = require('./router/Router.js');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

var oss = require('ali-oss');

var client = oss({
  accessKeyId: 'LTAI4G9pA3GqufjtMwAANbBa',
  accessKeySecret: 'g6NnMidKTsoERhoSjXcpXt1Ma3xNmP',
  bucket: 'qidian6',
  region: 'oss-cn-hangzhou'
});

async function listBuckets () {
  try {
    let result = await client.listBuckets();
  } catch(err) {
    console.log(err)
  }
}

listBuckets();



app.listen(3000,()=>{
  console.log('serve is running');
});

