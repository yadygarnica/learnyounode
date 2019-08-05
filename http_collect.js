function myProgram(){
    var url = process.argv[2];
    var http = require('http');
    var bl = require('bl');
    http.get(url, function callback(res){
        res.setEncoding("utf8");        
        res.on("error", function(error){
            console.log(error);
        });
        res.pipe(bl(function (err, data) {
            if(err){
                return console.log(error);
            }
            console.log(data.length);
            console.log(data.toString());
         }));
    });    
};

myProgram();