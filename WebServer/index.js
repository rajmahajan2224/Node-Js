const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Welcome to Node JS Server");
})

server.listen(8000, "127.0.0.1", () => {
  console.log("Your Server Running on Port 8000");
})