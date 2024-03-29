// console.log('first');
// process.nextTick(() => console.log('this is the process.next 1'));
// console.log('two');

// Promise.resolve().then(() => console.log('this is promise.resolve 1'));
// process.nextTick(() => console.log('this is the process.nextTick 1'));

process.nextTick(() => console.log('this is process.nextTick 1'));
process.nextTick(() => {
  console.log('this is process.nextick 1 ');
  process.nextTick(() => {
    console.log('this is the inner next Tick inside next tick');
  });
});

process.nextTick(() => {
  console.log(' this is the process.nextTick 3');
});

Promise.resolve().then(() => console.log('this is Promise.resolve 1'));
Promise.resolve().then(() => {
  console.log('this is Promise.resolve 2');
  process.nextTick(() => {
    console.log('this is the inner next tick inside promise then block');
  });
});

Promise.resolve().then(() => console.log('this is Prmise.resolve 3'));
