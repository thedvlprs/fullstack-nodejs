const http = require('http');

const port = process.env.PORT || 1337;

function respondText(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('hi');
}

function respondJson(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify({
      text: 'hi',
      numbers: [1, 2, 3]
    })
  );
}

function respondNotFound(req, res) {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
}

const server = http.createServer(function(req, res) {
  if (req.url === '/') return respondText(req, res);
  if (req.url === '/json') return respondJson(req, res);

  respondNotFound(req, res);
});

server.listen(port);
console.log(`Server listening on port ${port}`);
