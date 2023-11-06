// create web server
// Import the required modules
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Send a response to the client
  res.end('Hello, World!');
});

// Start the server
server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});
