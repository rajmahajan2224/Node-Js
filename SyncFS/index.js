const { log } = require('console');
const fs = require('fs');

fs.mkdir('Raj', (err) => {
  console.log("Directory has been created");
})

fs.writeFile("Raj/bio.txt", "Welcome to Async Challenge", (err) => {
  console.log("File Created");
})

fs.appendFile("Raj/bio.txt", " Very Good Challenge", (err) => {
  console.log("Data Added");
})

fs.readFile("Raj/bio.txt", "utf-8", (err, data) => {
  console.log(data);
})

fs.rename("Raj/bio.txt", "Raj/myBio.txt", (err) => {
  console.log("Rename File");
})

fs.unlink("Raj/myBio.txt", (err) => {
  console.log("Deleting File");
})

fs.rmdir("Raj", (err) => {
  console.log("Folder Deleted");
})