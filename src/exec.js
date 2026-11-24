const child_process = require("child_process");

module.exports = function runCommand(req) {
  const allowedCommands = {
    status: ['systemctl', ['status', 'myservice']],
    diskspace: ['df', ['-h']]
  };
  const userInput = req.query.command;
  const entry = allowedCommands[userInput];
  if (!entry) {
    throw new Error('Invalid command');
  }
  const [cmd, args] = entry;
  return child_process.execFile(cmd, args);
};
