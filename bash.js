var commands = require('./command.js');

process.stdout.write('prompt > ');

  process.stdin.on('data', function(data) {
    var cmd = data.toString().trim();

    commands.pwdFunction(cmd);

  commands.dateFunction(cmd);

  // process.stdout.write('You typed ' + cmd);
  process.stdout.write('\nprompt > ')
})
