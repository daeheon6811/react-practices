import http from 'http';
import express from 'express';
import * as path from 'path';
const port = 8080;
//Routers 
// Application Setup 
const application = express()
// 1. static serve
.use(express.static(path.join(path.resolve('.'), "public")))   //  정적 파일들 등록

//.use('/user' , userRouter);
// Server Setup
http.createServer(application)
.on("listening" , function(){
    console.info(`Http Server running on port ${port}`)
})
.listen(port);

