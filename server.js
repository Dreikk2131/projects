var http = require("http");
var url = require("url");
var util = require('util');
var way = require ('./way');
var arr = [];
var inquiry = {};
inquiry["/get"] = way.get;
inquiry["/add"] = way.add;
inquiry["/file"] = way.file;

var server = http.createServer((req, res) => {
    console.log(req.method, req.url);
    var answerUrl = url.parse(req.url, true);
    
    if (typeof inquiry[answerUrl.pathname] == "function"){
        inquiry[answerUrl.pathname](res, arr, answerUrl);
    } else {
        res.end("Unknow request");}
}) 

server.listen(3000);