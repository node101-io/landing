const path = require('path');
const pug = require('pug');

module.exports = (req, res, next) => {
  const newPath = path.join(__dirname, '../views');

  res.locals.include = pathToInclude => {
    return pug.renderFile(path.join(newPath, pathToInclude), {
      ...res.locals
    });
  };

  next();
};