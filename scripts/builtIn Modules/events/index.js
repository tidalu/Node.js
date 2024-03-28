const EventEmitter = require('node:events');
const emitter = new EventEmitter();

emitter.on('order-pizza', (size, topping) => {
  console.log('started baking bro', size, topping);
});

emitter.on('order-pizza', (size) => {
  if (size == 'large') {
    console.log('serving free coke!');
  }
});
emitter.emit('order-pizza', 'large', 'mushroom');
