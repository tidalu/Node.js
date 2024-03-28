const fs = require('node:fs');

console.log('first');
const fileContext = fs.readFileSync('./file.txt', 'utf-8');

console.log(fileContext);
// node js is asyncronous

console.log('second');

fs.readFile('./file.txt', 'utf-8', (error, data) => {
  if (error) {
    console.log(error);
  }

  console.log(data);
});

console.log('third');

// writing content to the file

fs.writeFileSync('./greet.txt', 'Hello world');

fs.writeFile(
  './greet.txt',
  ' this is being appeanded',
  { flag: 'a' },
  (error) => {
    if (error) {
      console.log(error);
    } else console.log('written');
  }
);
