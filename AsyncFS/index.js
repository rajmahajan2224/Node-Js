const fs = require('fs');

fs.writeFile('read.txt','Welcome Async', (err) => {
  console.log("file is created");
});

fs.appendFile('read.txt','Callback Hell', (err) => {
  console.log("Task Completed");
});

fs.readFile('read.txt','utf8', (err,data) => {
  console.log(data);
})