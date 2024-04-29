const path = require('path');
const pug = require('pug');

const viewsPath = path.join(__dirname, '../views');

module.exports = (req, res, next) => {
  res.locals.include = pathToInclude => {
    return pug.renderFile(path.join(viewsPath, pathToInclude), {
      ...res.locals,
    });
  };

  next();
};