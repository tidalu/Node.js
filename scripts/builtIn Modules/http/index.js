const http = require('node:http');

const fs = require('node:fs');

const server = http.createServer((req, res) => {
  const name = 'Ulugbek';
  //   console.log(res);
  //   const superHero = {
  //     firstName: 'Bruce',
  //     secondName: 'Wayne',
  //   };
  res.writeHead(200, { 'Content-Type': 'text/html' });
  //   fs.createReadStream(__dirname + '/index.html').pipe(res);
  let html = fs.readFileSync('./index.html', 'utf-8');
  html = html.replace('{{name}}', name);
  res.end(html);
});

server.listen(3001, () => {
  console.log('server is running on port 3001');
});
