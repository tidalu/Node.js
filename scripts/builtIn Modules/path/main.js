const path = require('node:path');
console.table('--------------------------------------------------------------');
console.log(__filename); // the full path for current file
console.log(__dirname); // the full of the current directory
console.table('--------------------------------------------------------------');

console.log(path.basename(__filename)); // pwth.basename gives the last portion of the path like for this it will just return filename
console.log(path.basename(__dirname)); // for this it will just return dir name
console.table('--------------------------------------------------------------');

console.log(path.extname(__filename)); // returns the extention of the file -> .js
console.log(path.extname(__dirname)); // nothing cuz it does not have any ext
console.table('--------------------------------------------------------------');

console.log(path.parse(__filename)); // returns an object with { root, dir, base: last portion, ext, name: just name without extention if it is an file }
console.log(path.parse(__dirname)); //
console.table('--------------------------------------------------------------');

console.log(path.isAbsolute(__filename)); // chechs if the path absolute
console.log(path.isAbsolute('../index.js')); // false , not absolute , it is relative

console.table('--------------------------------------------------------------');
console.log(path.join('/folder1', 'folder2', '../index.js')); // \folder1\index.js
console.log(path.join(__dirname, '../../data/data.json')); // C:\Users\ulugi\OneDrive\Desktop\u-w\GitHub\Node.js\scripts\data\data.json
console.table('--------------------------------------------------------------');

console.log(path.resolve('folder1', 'folder2', 'index.js'));
console.log(path.resolve('/folder1', 'folder2', 'index.js')); // \folder1\index.js
console.log(path.resolve('/folder1', '//folder2', 'index.js')); // \folder1\index.js
console.log(path.resolve('/folder1', '//folder2', '../index.js')); // \folder1\index.js
console.log(path.resolve(__dirname, '../../data/data.json')); //
