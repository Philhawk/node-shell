var exports = module.exports;
var fs = require('fs');
var request = require('request');

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
       process.stdout.write("\n" + data.toString());
     })
     process.stdout.write("prompt > ")
   }
}

exports.headFunction = function(data) {
  var dataArray = data.split(' ');
  if(dataArray[0] === 'head') {
    fs.readFile(dataArray[1], function(err, data) {
      if(err) {
        return console.error(err);
      }
      var firstFive = data.toString().split('\n').slice(0, 6);
      process.stdout.write('\n' + firstFive.join('\n'))
      process.stdout.write('\n' + "prompt > ")
    })

  }
}

exports.tailFunction = function(data) {
  var dataArray = data.split(' ');
  if(dataArray[0] === 'tail') {
    fs.readFile(dataArray[1], function(err, data) {
      if(err) {
        return console.error(err);
      }
      var stringsInFile = data.toString().split('\n').length;
      var lastFive = data.toString().split('\n').slice(stringsInFile - 6);
      process.stdout.write('\n' + lastFive.join('\n'));
      process.stdout.write("prompt > ")
    })
  }
}

exports.sortFunction = function(data){
  var dataArray = data.split(' ');

  if(dataArray[0] === 'sort'){

    fs.readFile(dataArray[1], function (err, data) {
       if (err) {
           return console.error(err);
       }

       var eachLine = data.toString().split('\n').sort().join('\n');
       process.stdout.write(eachLine);
     })
     process.stdout.write("prompt > ")
   }
}

exports.lineCount = function(data) {
  var dataArray = data.split(' ');

  if(dataArray[0] === 'wc'){

    fs.readFile(dataArray[1], function (err, data) {
       if (err) {
           return console.error(err);
       }

       var numLines = data.toString().split('\n').sort().join('\n');
       var linesOutput = numLines.split('\n').length;

       process.stdout.write(linesOutput.toString());
     })
     process.stdout.write("prompt > ")
   }
}

exports.uniqFunction = function(data) {
  var dataArray = data.split(' ');

  if(dataArray[0] === 'uniq'){

    fs.readFile(dataArray[1], function (err, data) {
       if (err) {
           return console.error(err);
       }

       var eachLine = data.toString().split('\n')

       var resultArray = [];
       for (var i = 0; i < eachLine.length - 1; i++) {
           if (eachLine[i + 1] !== eachLine[i]) {
               resultArray.push(eachLine[i]);
           }
         resultArray;
       }
       process.stdout.write('\n' + resultArray.join('\n'));
     })
     process.stdout.write("prompt > ")
   }
}

exports.curlFunction = function(data){
  var dataArray = data.split(' ');

  if(dataArray[0] === 'curl') {
    if(!dataArray[1].includes('https://')) {
      console.error("Please insert full hypertext link including 'https://'");
    }

      request(dataArray[1], function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log(body) // Show the HTML for the Google homepage.
          process.stdout.write("prompt > ")
        }
      })

  }
}
