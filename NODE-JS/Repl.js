const fs = require('fs'); // For using built-in modules
fs.writeFileSync("read.txt", "Welcome Node"); //Write a file if file already exists overides the data
fs.appendFileSync("read.txt"," What's in new version"); //Add data to file

const buf_data = fs.readFileSync("read.txt"); //Read a file; 

org_data = buf_data.toString(); //Convert buffer data to readable format
console.log(org_data);

fs.renameSync('read.txt', 'readwrite.txt'); //Rename a file name