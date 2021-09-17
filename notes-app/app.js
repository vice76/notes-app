const validator = require("validator");
const chalk = require("chalk");
const fs= require('./utils.js');

const getNotes = fs()

console.log(getNotes);
console.log(validator.isEmail("arpit@gmail.com"));
console.log(chalk.green("Success!"));