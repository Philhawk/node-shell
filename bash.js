var commands = require('./commands.js');

process.stdout.write('prompt > ');

  process.stdin.on('data', function(data) {
    var cmd = data.toString().trim();

    var cmdList = cmd.split((/\s*\|\s*/g));

    if (cmd === '') {
      return process.stdout.write('prompt > ');
    }

    commands.pwd(cmdList);

    commands.date(cmdList);
    commands.ls(cmdList);
    commands.echo(cmdList);
    commands.cat(cmdList);
    commands.head(cmdList);
    commands.tail(cmdList);
    commands.curl(cmdList);
    commands.sortThis(cmdList);
    commands.wc(cmdList);
    commands.uniq(cmdList);
})
