var http = require("http");
var url = require("url");
var util = require('util');
var fs = require("fs");
    
    function get(res, arr){
        console.log("Get connect")
        res.end(util.inspect(arr));
    };

    function add(res, arr, answerUrl){
        if (answerUrl.pathname !== "/favicon.ico"){
            arr.push(answerUrl.search.substr(1));}
            console.log("Add connect");
            res.end(answerUrl.search.substr(1))
    };

    function file (res){
        fs.readFile('page.html', (err, page)=>{
            if(err){
                console.error(err);
                res.statusCode = 500;
                res.end("File not found");
            }
            res.end(page);
        })
    } 

    exports.get = get;
    exports.add = add;
    exports.file = file;