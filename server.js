var express = require('express');
var os = require('os');
var app = express();

app.get('/', function(req, res){
    var ipaddress = req.headers['x-forwarded-for'];//os.networkInterfaces().eth0[0].address;
    //var language = req.acceptsLanguages('en-US','en-GB', 'ru', 'uk', 'ru-mo', 'be' ); 
    var language = req.headers['accept-language'].split(',')[0];//req.acceptsLanguages;
    var software = req.headers['user-agent'].split(')')[0].split('(')[1];
    //os.platform()+': '+ os.release();
    
    var result = {
        ipaddress: ipaddress,
        language: language,
        software: software
    };
    //var ans = JSON.parse(result);
    res.json(result);
});

app.listen(process.env.PORT|| 8080, function(){
    console.log('port is 8080!');
});