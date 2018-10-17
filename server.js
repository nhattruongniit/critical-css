var express = require("express");
var app     = express();
var path    = require("path");

app.use(express.static(__dirname + '/static'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/index-critical',function(req,res){
  res.sendFile(path.join(__dirname+'/index-critical.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(3000);

console.log("Running at Port 3000");