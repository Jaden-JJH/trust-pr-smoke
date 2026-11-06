const child_process = require("child_process");

module.exports = function runCommand(req) {
  const userInput = req.query.command;
  return child_process.exec(userInput);
};
