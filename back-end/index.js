const express = require('express');
const app = new express();
const router = require('./router/Router.js');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);





app.listen(3000,()=>{
  console.log('serve is running');
});

