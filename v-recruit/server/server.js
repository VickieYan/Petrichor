const express = require('express')
//新建app
const app = express()

app.get('/', function(req,res) {
    res.send('hello world')
})

//在9093端口监听服务器
app.listen(9093,function(){
    console.log('Node app start at port 9093')
})