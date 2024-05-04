const path = require('path');
const pug = require('pug');

const viewsPath = path.join(__dirname, '../views');

module.exports = (req, res, next) => {
  res.locals.include = (pathToInclude, locals) => pug.renderFile(
    path.join(viewsPath, pathToInclude),
    {
      ...res.locals,
      ...locals
    }
  );

  next();
};