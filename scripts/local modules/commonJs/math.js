const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};
// first
// module.exports = add;

// second
// module.exports = (a, b) => {
//   return a + b;
// };

// // third
// module.exports = {
//   add,
//   subtract,
// };

//fourth

// module.exports.multiply = (a, b) => {
//   return a * b;
// };

// module.exports.divide = (a, b) => {
//   return a / b;
// };

//fifth

exports.anonym = (arguments) => {
  return [...arguments];
};

//  iife function wraps every module

// (function (exports, require, module, __filename, __dirname) {
//   const smth = 'Something';
//   console.log(smth);
// })();

// exports
