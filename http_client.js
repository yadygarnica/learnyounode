function myProgram(){
    var url = process.argv[2];
    var http = require('http');
    http.get(url, function callback(res){
        res.setEncoding("utf8");
        res.on("data", function(data){
            console.log(data);
        });
        res.on("error", function(error){
            console.log(error);
        });
    });
    
};

myProgram();