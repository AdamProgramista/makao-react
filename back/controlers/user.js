const { User } = require('../models/user')

const login = (req, res) => {
  const userLogin = req.body.name;
  const user = new User(userLogin);
  console.log(userLogin);
  req.session.user = user;
  res.send(user);
}

module.exports = { login }