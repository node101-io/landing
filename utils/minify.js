const path = require('path');
const { minify } = require('minify');

module.exports = (sourcedir) => {
  // loop through all files in the directory and subdirectories

  const walkSync = (dir, filelist = []) => {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      if (fs.statSync(path.join(dir, file)).isDirectory()) {
        filelist = walkSync(path.join(dir, file), filelist);
      }
      else {
        filelist = filelist.concat(path.join(dir, file));
      }
    });
    return filelist;
  }

  const files = walkSync(sourcedir);

  // minify each file
  // and write it to the same directory
  // with a .min.css

  files.forEach(async (file) => {
    const minified = await minify(file);
    fs.writeFileSync(file.replace('.css', '.min.css'), minified);
  });

  console.log('Minified all files');
};
