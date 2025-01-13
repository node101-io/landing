import fs from 'fs/promises';
import path from 'path';
import { minify } from 'csso';
import swc from '@swc/core';

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

const minifyJS = (source) => {
  fs.readdir(source)
    .then((folders) => {
      folders.forEach((folder) => {
        fs.readdir(path.join(source, folder))
          .then((files) => {
            files.forEach((file) => {
              if (file.endsWith('.min.js')) return;

              fs.readFile(path.join(source, folder, file), 'utf-8')
                .then((data) => {
                  const minified = swc.minifySync(data).code;

                  fs.writeFile(
                    path.join(source, folder, file.replace('.js', '.min.js')),
                    minified
                  );
                });
            });
          });
      });
    });
};

minifyCSS(path.join(import.meta.dirname, '../public/css'));
minifyJS(path.join(import.meta.dirname, '../public/js'));
