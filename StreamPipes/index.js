const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on("request", (req,res) => {
const readStream = fs.createReadStream("input.txt");
readStream.pipe(res);
})

server.listen(8000, "127.0.0.1", () => {
  console.log("Your Server Running on Port 8000");
});