import fs from 'fs/promises';
import path from 'path';
import { minify } from 'csso';

const minifyCSS = (source) => {
  fs.readdir(source)
    .then((folders) => {
      folders.forEach((folder) => {
        fs.readdir(path.join(source, folder))
          .then((files) => {
            files.forEach((file) => {
              if (file.endsWith('.min.css')) return;

              fs.readFile(path.join(source, folder, file), 'utf-8')
                .then((data) => {
                  const minified = minify(data).css;
                  fs.writeFile(
                    path.join(source, folder, file.replace('.css', '.min.css')),
                    minified
                  );
                })
            });
          });
      });
    });
};

minifyCSS(path.join(import.meta.dirname, '../public/css'));
