const fs = require('node:fs');
const zlib = require('node:zlib');

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream('./file.txt', {
  encoding: 'utf-8',
  highWaterMark: 2,
});
readableStream.pipe(gzip).pipe(fs.WriteStream('./file2.txt.gz'));

const writableStream = fs.createWriteStream('./file1.txt');

readableStream.pipe(writableStream);

// readableStream.on('data', (chunk) => {
//   console.log(chunk);
//   writableStream.write(chunk);
// });
