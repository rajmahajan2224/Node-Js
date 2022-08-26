const http = require('http');
const fs = require('fs');

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
  else if(req.url == "/userAPI") {
    fs.readFile(`${__dirname}/Simpleapi/Userapi.json`, "utf-8", (err,data) => {
      console.log(data);
      const objData = JSON.parse(data);
      res.end(objData);
    })
  }
  else {
    res.writeHead(404, {"content-type": "text/html"});
    res.end("<h1>Page Does not exists</h1>");
  }
})

server.listen(8000, "127.0.0.1", () => {
  console.log("Your Server Running on Port 8000");
})