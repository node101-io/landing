module.exports = (req, res, next) => {
  if (!req.session.has_visited || typeof req.session.has_visited != 'boolean') {
    req.session.has_visited = true;
    res.locals.is_new_user = true;
  } else {
    res.locals.is_new_user = false;
  };

  res.locals.is_new_user = true;
  // # varsa da
  next();
};