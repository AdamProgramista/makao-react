const { User } = require('../models/user')

const login = (req, res) => {
  const userLogin = req.body.name;
  const user = new User(userLogin);
  req.session.user = user;
  console.log(user);
  res.send(user);
};

module.exports = { login }
