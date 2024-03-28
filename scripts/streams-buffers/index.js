const buffer = new Buffer.from('AlifBee');

buffer.write('heylo');
console.log(buffer.toString());
console.log(buffer);
console.log(buffer.toJSON());
