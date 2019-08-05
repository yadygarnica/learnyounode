var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function (req, res) {
    var stream = fs.createReadStream(filePath);  
    stream.pipe(res);    
});
server.listen(port)