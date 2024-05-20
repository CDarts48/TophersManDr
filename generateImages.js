// In generateImages.js
const fs = require('fs');
const path = require('path');

const dirPath = path.resolve(__dirname, './tophers/src/workpics'); // path to your images directory
const targetPath = path.resolve(__dirname, './tophers/src/images.js'); // path to the output .js file

fs.readdir(dirPath, (err, files) => {
  if (err) throw err;

  const imports = files
    .filter(file => path.extname(file).toLowerCase() === '.jpg')
    .map((file, index) => `import image${index + 1} from './workpics/${file}';`);

  const exports = `const images = [${files.map((_, index) => `image${index + 1}`)}];\nexport default images;`;

  const content = `${imports.join('\n')}\n${exports}\n`;

  fs.writeFile(targetPath, content, err => {
    if (err) throw err;
    console.log('images.js file has been saved!');
  });
});