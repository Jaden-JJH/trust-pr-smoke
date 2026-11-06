module.exports = function findUser(req, db) {
  const userInput = req.query.name;
  return db.query("SELECT * FROM users WHERE name = '" + userInput + "'");
};
