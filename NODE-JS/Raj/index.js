const fs = require('fs');

fs.writeFileSync('bio.txt', 'Welcome to our platform');
fs.appendFileSync('bio.txt', ' What you want please let us know');

const buf_data = fs.readFileSync('bio.txt');
org_data = buf_data.toString();
console.log(org_data);

fs.renameSync('bio.txt', 'mybio.txt');
fs.unlinkSync('mybio.txt');