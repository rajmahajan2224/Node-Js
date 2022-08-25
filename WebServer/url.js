const http = require('http');

const server = http.createServer((req, res) => {
  // console.log(req.url);
  if(req.url == "/") {
    res.end("Welcome to home page");
  }
  else if(req.url == "/about") {
   res.end("Welcome to about page");
  }
  else if(req.url == "/contact") {
    res.end("Welcome to contact page");
  }
  else {
    res.writeHead(404, {"content-type": "text/html"});
    res.end("<h1>Page Does not exists</h1>");
  }
})

server.listen(8000, "127.0.0.1", () => {
  console.log("Your Server Running on Port 8000");
})