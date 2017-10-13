//import http = require('http');
//var port = process.env.port || 1337
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('jai shriram\n');
//}).listen(port);

import express = require('express');
var app = express();

app.listen(8080); 
app.get('/', function (req, res) { res.sendFile(__dirname + '\\' +'Index.html'); });
console.log('Server has started now!');
