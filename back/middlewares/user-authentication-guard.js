const userAuthenticationGuard = (req, res, next) => {
  const user = req.session.user;
  if (!user) {
    res.status(401).send('User undefined');
    return;
  }
  next();
}

module.exports = { userAuthenticationGuard };
