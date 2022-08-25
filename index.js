const chalk = require('chalk');
const validator = require("validator");

console.log(chalk.green("Hello World!"));

const res = validator.isEmail("Raj@raj.com");
console.log(res);