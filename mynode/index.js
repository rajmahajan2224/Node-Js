const fs = require('fs');

fs.mkdirSync('Raj');
fs.writeFileSync('Raj/bio.txt','Welcome');
fs.appendFileSync('Raj/bio.txt', ' Tells us what we can do');

const data = fs.readFileSync('Raj/bio.txt','utf8');
console.log(data);

fs.renameSync('Raj/bio.txt', 'Raj/myBio.txt');

fs.unlinkSync('Raj/myBio.txt');

fs.rmdirSync('Raj');