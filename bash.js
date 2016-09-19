var commands = require('./commands.js');

process.stdout.write('prompt > ');

  process.stdin.on('data', function(data) {
    var cmd = data.toString().trim();

    commands.pwdFunction(cmd);

    commands.dateFunction(cmd);
    commands.fileStructure(cmd);
    commands.echoFunction(cmd);
    commands.catFunction(cmd);
    // commands.catFunction(cmd);
  // process.stdout.write('You typed ' + cmd);
  process.stdout.write('\nprompt > ')
})
