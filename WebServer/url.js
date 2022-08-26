const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
const data = fs.readFileSync(`${__dirname}/Simpleapi/Userapi.json`, "utf-8");
const objData = JSON.parse(data);
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
  else if(req.url == "/userAPI") {
      res.writeHead(200, {"content-type": "application/json"});
      res.end(objData);
  }
  else {
    res.writeHead(404, {"content-type": "text/html"});
    res.end("<h1>Page Does not exists</h1>");
  }
})

server.listen(8000, "127.0.0.1", () => {
  console.log("Your Server Running on Port 8000");
})