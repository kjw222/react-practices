import http from 'http';                                //const http = require('http');
import * as path from 'path';      //const http = require('http');
import express from 'express';  //const http = require('http');

const port = 8080;

//Application Setup

const application = express().use(express.static(path.join(path.resolve('.'), 'public')));       //지금 현재 위치를 resolve해라는 뜻

http.createServer(application)
    .on('listening', function(){
        console.info(`http server runs on ${port}`);
}).listen(port);  