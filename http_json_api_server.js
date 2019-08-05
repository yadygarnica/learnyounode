const http = require('http');
const url = require('url');
const port = Number(process.argv[2]);

var date, data;

const server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true);  
    date = new Date(parsedUrl.query.iso);   

    res.writeHead(200, { 'Content-Type': 'application/json' });

    if(parsedUrl.pathname === '/api/parsetime') {   
         
        data = {
            'hour': date.getHours(),
            'minute': date.getMinutes(),
            'second': date.getSeconds()
        };
    } else if (parsedUrl.pathname === '/api/unixtime') {
        data = {
            'unixtime': date.getTime()
        };
    }

    res.end(JSON.stringify(data));
});

server.listen(port);