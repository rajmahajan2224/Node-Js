// Old Way

const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on("request", (req,res) => {
  fs.readFile("input.txt", (err, data) => {
    if(err) return console.log(err);
    res.end(data.toString());
  })

  // Streaming Way

const readStream = fs.createReadStream("input.txt");
readStream.on('data', (chunkdata) => {
  res.write(chunkdata);
  res.end();
})

readStream.on('end', () => {
  res.end("Data End");
})

readStream.on('error', (err) => {
  console.log(err);
  res.end("File not found");
})
})

server.listen(8000, "127.0.0.1", () => {
  console.log("Your Server Running on Port 8000");
});


