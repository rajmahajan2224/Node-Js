const path = require('path');

console.log(path.dirname('D:/NODE-JS/pathmod.js'));
console.log(path.extname('D:/NODE-JS/pathmod.js'));
console.log(path.basename('D:/NODE-JS/pathmod.js'));

console.log(path.parse('D:/NODE-JS/pathmod.js'));

const myPath = path.parse('D:/NODE-JS/pathmod.js');
console.log(myPath.name);
console.log(myPath.root);