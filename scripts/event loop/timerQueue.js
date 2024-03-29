// setTimeout(() => console.log('this is the setTimeout 1'), 0);
// setTimeout(() => {
//   console.log('this is the setTimeout 2');
//   process.nextTick(() =>
//     console.log(' this is the next tick inside setTimeout')
//   );
// }, 0);
// setTimeout(() => console.log('this is the setTimeout 3'), 0);

// process.nextTick(() => console.log('this is process.nextTick 1'));
// process.nextTick(() => {
//   console.log('this is process.nextick 1 ');
//   process.nextTick(() => {
//     console.log('this is the inner next Tick inside next tick');
//   });
// });

// process.nextTick(() => {
//   console.log(' this is the process.nextTick 3');
// });

// Promise.resolve().then(() => console.log('this is Promise.resolve 1'));
// Promise.resolve().then(() => {
//   console.log('this is Promise.resolve 2');
//   process.nextTick(() => {
//     console.log('this is the inner next tick inside promise then block');
//   });
// });

// Promise.resolve().then(() => console.log('this is Prmise.resolve 3'));

setTimeout(() => console.log('this is the setTimeout 1'), 1000);
setTimeout(() => {
  console.log('this is the setTimeout 2');
}, 500);
setTimeout(() => console.log('this is the setTimeout 3'), 0);
