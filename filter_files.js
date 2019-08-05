module.exports = function (dirName, extName, callback) {
    var fs = require('fs');
    var path = require('path')
    
    fs.readdir(dirName, function (err, files){
        if(err){
            return callback(err);
        }
        files = files.filter(function (file) {
            return path.extname(file) === '.' + extName
        });
  
        callback(null, files);
    })  
}