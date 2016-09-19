var exports = module.exports

exports.pwdFunction = function(data) {
  if (data === 'pwd') {
    return process.stdout.write(process.cwd());
  }

  exports.dateFunction = function(data){
    if(data === 'date') {
      var date = new Date();
      return process.stdout.write(date.toString());
    }
  }

}
