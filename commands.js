var exports = module.exports;

var fs = require('fs');
var request = require('request');

exports.done = function(output, func){
  if (func){ t90-=0=5wq Zx//;
    console.log('is there func', func)
    exports[func](output);
  } else {
  console.log('no there is not func', output)
  process.stdout.write(output)
  }
}

exports.pwd = function(data) {
  if (data[0] === 'pwd') {
    var pwdOutput = process.cwd().toString();
    exports.done(pwdOutput, data[1]);
  }
}


exports.date = function(data) {
  if(data[0] === 'date') {
    var date = new Date();
    var dateOutput = process.stdout.write(date.toString());
    exports.done(dateOutput.toString());
  }
}

exports.ls = function(input){
  if(input[0] === 'ls') {
    var files = fs.readdir('.', function(err, files) {
                  if (err) throw err;
                  var results = [];
                  files.forEach(function(file) {
                    results.push(file.toString());
                  })
                  exports.done(results.join('\n'), input[1])
                });
  }
}

exports.echo = function(data) {
  var echoArray = data[0];
  var dataArray = echoArray.split(' ');
  if(dataArray[0] === 'echo') {
    exports.done(dataArray[1]);
  }
}

exports.cat = function(input){

  var catArray = input[0];
  var dataArray = catArray.split(' ');
  if(dataArray[0] === 'cat'){
    fs.readFile(dataArray[1], function (err, data) {
       if (err) {
           return console.error(err);
       }
       exports.done(data.toString(), input[1]);
     })
   }
}

exports.head = function(data) {
  var headArray = data[0];
  var dataArray = headArray.split(' ');
  if(dataArray[0] === 'head') {
    fs.readFile(dataArray[1], function(err, data) {
      if(err) {
        return console.error(err);
      }
      var firstFive = data.toString().split('\n').slice(0, 5);
      exports.done(firstFive.join('\n'));
    })

  } else {
    var firstFive = data.toString().split('\n').slice(0, 5);
    exports.done(firstFive.join('\n'));
  }
}

exports.tail = function(data) {
  var tailArray = data[0]
  var dataArray = tailArray.split(' ');

  if(dataArray[0] === 'tail') {
    fs.readFile(dataArray[1], function(err, data) {
      if(err) {
        return console.error(err);
      }
      var stringsInFile = data.toString().split('\n').length;
      var lastFive = data.toString().split('\n').slice(stringsInFile - 6);
      exports.done(lastFive.join('\n'));
    })
  }
}

exports.sortThis = function(data){
  var sortArray = data[0];
  var dataArray = sortArray.split(' ');

  if(dataArray[0] === 'sort'){

    fs.readFile(dataArray[1], function (err, data) {
       if (err) {
           return console.error(err);
       }

       var eachLine = data.toString().split('\n').sort().join('\n');
       exports.done(eachLine);
     })
   }
}

exports.wc = function(data) {
  var lineArray = data[0];
  var dataArray = lineArray.split(' ');

  if(dataArray[0] === 'wc'){

    fs.readFile(dataArray[1], function (err, data) {
       if (err) {
           return console.error(err);
       }

       var numLines = data.toString().split('\n').sort().join('\n');
       var linesOutput = numLines.split('\n').length;
       exports.done(linesOutput.toString());
     })
   } else {
     var numLines = data.toString().split('\n').sort().join('\n');
     var linesOutput = numLines.split('\n').length;
     exports.done(linesOutput.toString());
   }
}

exports.uniq = function(data) {
  var uniqArray = data[0];
  var dataArray = uniqArray.split(' ');

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
      exports.done(resultArray.join('\n'));

     })
   }
}

exports.curl = function(data){
  var curlArray = data[0];
  var dataArray = curlArray.split(' ');

  if(dataArray[0] === 'curl') {
    if(!dataArray[1].includes('https://')) {
      console.error("Please insert full hypertext link including 'https://'");
    }

      request(dataArray[1], function (error, response, body) {
        if (!error && response.statusCode == 200) {
          exports.done(body);
        }
      })

  }
}
