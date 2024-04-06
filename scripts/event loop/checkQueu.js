const fs = require('node:fs');

fs.readFile(__filename, () => {
  console.log('this is the readFile 1');
  setImmediate(() =>
    console.log('this s the inner setImmediate inside readFile')
  );
  process.nextTick(() =>
    console.log('this is the inner process.nextTick inside reaFile')
  );
  Promise.resolve().then(() =>
    console.log('this is the inner Promise.resolve inside readFile')
  );
});

process.nextTick(() => console.log('this is the process.nextTick 1'));
Promise.resolve().then(() => console.log('this is the promise resolve 1'));
setTimeout(() => console.log('this is the setTimeout 1'), 0);

for (let index = 0; index < 2000000000; index++) {}
