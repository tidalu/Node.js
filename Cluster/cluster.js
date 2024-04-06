const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);

  cluster.fork();
  cluster.fork();

  // Listen for the exit event of the worker processes
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker process ${worker.process.pid} died`);
    // Replace the dead worker by forking a new one
    cluster.fork();
  });
} else {
  console.log(`Worker ${process.pid} started`);

  const server = http.createServer((req, res) => {
    if (req.url == '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Home Page');
    } else if (req.url == '/slow-page') {
      // Simulating a long-running operation
      for (let i = 0; i < 6000000000; i++) {}
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Slow Page');
    }
  });

  server.listen(3000, () => console.log('Running on port 3000'));
}
