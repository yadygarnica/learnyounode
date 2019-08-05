var port = process.argv[2];
var strftime = require('strftime') // not required in browsers
var net = require('net')

var datetime = new Date();

var server = net.createServer(function (socket) {  
    var data = strftime('%F %H:%M', datetime);
    socket.end(data + '\n');  
})
server.listen(port)