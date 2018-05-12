const { User } = require('../models/user')

const login = (req, res) => {
  // if (req.session.user) {
  //   res.send(req.session.user);
  //   return;
  // }
  const userLogin = req.body.name;
  const user = new User(userLogin);
  req.session.user = user;
  res.send(user);
};

const getSessionUser = (req, res) => {
  console.log(req.session);
  if (!req.session.user) {
    res.status(401).send('Unauthorized');
    return;
  }
  res.send(req.session.user);
};

module.exports = { login, getSessionUser };
