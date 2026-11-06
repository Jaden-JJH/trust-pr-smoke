module.exports = (req) => {
  try {
    return JSON.parse(req.query.expr);
  } catch (err) {
    throw new Error('Invalid expression provided');
  }
};
