// server.js
const http = require('http');
const fs = require('fs');
const url = require('url');

// Serve the HTML file
const htmlFile = fs.readFileSync('index.html', 'utf8');

// Create an HTTP server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  console.log(`Received request: ${req.method} ${req.url}`);

  // Serve the HTML file
  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlFile);
  }
  // Handle the /balance API endpoint
  else if (parsedUrl.pathname === '/balance') {
    const asset = parsedUrl.query.asset;
    const balances = {
      BTC: 15,
      MATIC: 100,
      // Add more assets here
    };

    if (asset in balances) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ [asset]: balances[asset] }));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Asset not found');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

// Start the server
server.listen(4200, () => {
  console.log('Server started on port 4200');
});