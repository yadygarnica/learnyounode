var http = require('http');
var bl = require('bl');

function myProgram(){
    var url1 = process.argv[2];
    var url2 = process.argv[3];
    var url3 = process.argv[4];

    var queue = [];
    var count = 0;
    http.get(url1,aux(0));
    http.get(url2,aux(1));
    http.get(url3,aux(2));

    function aux (i){
        return function callback(response){
                    response.pipe(bl(function (err, data) { 
                        queue[i] = data.toString();
                        count++;
                        if(count == 3){
                             queue.forEach(function(pos){
                                console.log(pos);
                             });
                        }
                    }));
                };
    };

};
myProgram();