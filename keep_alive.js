var http = require('http');

http.createServer(function (req,res){
    res.write('Goku is alive.');
    res.end();
}).listen(8080);