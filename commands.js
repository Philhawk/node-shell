var exports = module.exports;
var fs = require('fs');

exports.pwdFunction = function(data) {
  if (data === 'pwd') {
    return process.stdout.write(process.cwd());
  }
}

exports.dateFunction = function(data){
  if(data === 'date') {
    var date = new Date();
    return process.stdout.write(date.toString());
  }
}

exports.fileStructure = function(data){
  if(data === 'ls') {
    var files = fs.readdir('.', function(err, files) {
                  if (err) throw err;
                  files.forEach(function(file) {
                    process.stdout.write(file.toString() + "\n");
                  })
                  process.stdout.write("prompt > ");
                });
    return files;
  }
}

exports.echoFunction = function(data) {
  var dataArray = data.split(' ');
  if(dataArray[0] === 'echo') {
    process.stdout.write(dataArray[1]);
  }
}

exports.catFunction = function(data){
  var dataArray = data.split(' ');

  if(dataArray[0] === 'cat'){
    fs.readFile(dataArray[1], function (err, data) {
       if (err) {
           return console.error(err);
       }
       console.log("Asynchronous read: " + data.toString());
     })
   }
}
// exports.catFunction = function(data) {
//   var dataArray = data.split(' ');
//   if(dataArray[0] === 'cat') && dataArray[1] {
//     process.stdout.write(dataArray[1]);
//   }
// }
