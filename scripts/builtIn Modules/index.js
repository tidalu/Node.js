const PizzaShop = require('./events/pizzaShop.js');
const Drink = require('./events/drinkMachine.js');

// path
// events
// fs
// stream
// http

// callbacks
// In Javascript , functions are first class objects
// A function can be passed as an argument to a function
// a fucntion can also be returned as a values from other functions

// pizza shop

const pizzaShop = new PizzaShop();
const drinkMachine = new Drink();

pizzaShop.on('order', (size, topping) => {
  console.log(`Order recieved! Baking a ${size} pizza wit ${topping}`);
  drinkMachine.serveDrink(size);
});

pizzaShop.order('large', 'mushroom');
pizzaShop.displayOrderNumber();
