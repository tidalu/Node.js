const fs = require('node:fs');

// fs.readFile(__filename, () => {
//   console.log('this is readfile 1');
// });

// process.nextTick(() => console.log('this isthe proces tick 1'));
// Promise.resolve().then(() => console.log('this is the Promise.resolve 1'));

// setTimeout(() => console.log('this is setTIme oout 1'), 0);

fs.readFile(__filename, () => {
  console.log('this is readfile 1');
  setImmediate(() => console.log('inside of io immediate'));
});
fs.readFile(__filename, () => {
  console.log('this is readfile 2');
});

process.nextTick(() => console.log('this is the process.nextTick 1'));
Promise.resolve().then(() => console.log('this is the promise.resolve 1'));

setTimeout(() => console.log(' this is setTimeOut 1 '), 0);
setImmediate(() => {
  Promise.resolve().then(() => console.log('this is the promise.resolve 2'));
  console.log('this is immediate');
});
for (let index = 0; index < 2000000000; index++) {}
