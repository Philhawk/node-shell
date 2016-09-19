process.stdout.write('prompt > ');

process.stdin.on('data', function(data) {
  var cmd = data.toString().trim();

  if (cmd === 'pwd') {
    process.stdout.write(process.cwd());
  }
  if(cmd === 'date') {
    var date = new Date();
    process.stdout.write(date.toString());
  }

  // process.stdout.write('You typed ' + cmd);
  process.stdout.write('\nprompt > ')
})
