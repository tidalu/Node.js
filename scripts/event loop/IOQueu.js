const fs = require('node:fs');

// fs.readFile(__filename, () => {
//   console.log('this is readfile 1');
// });

// process.nextTick(() => console.log('this isthe proces tick 1'));
// Promise.resolve().then(() => console.log('this is the Promise.resolve 1'));

setTimeout(() => console.log('this is setTIme oout 1'), 0);

fs.readFile(__filename, () => {
  console.log('this is readfile 1');
});
