var commands = require('./commands.js');

process.stdout.write('prompt > ');

  process.stdin.on('data', function(data) {
    var cmd = data.toString().trim();

    commands.pwdFunction(cmd);

    commands.dateFunction(cmd);
    commands.fileStructure(cmd);
    commands.echoFunction(cmd);
    commands.catFunction(cmd);
    commands.headFunction(cmd);
    commands.tailFunction(cmd);
    commands.curlFunction(cmd);
    commands.sortFunction(cmd);
    commands.lineCount(cmd);
    commands.uniqFunction(cmd);
    // commands.catFunction(cmd);
  // process.stdout.write('You typed ' + cmd);
  process.stdout.write('\nprompt > ')
})
