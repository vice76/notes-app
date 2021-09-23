const yargs = require("yargs");
const chalk = require("chalk");
const fs = require("./utils.js");

//const command = process.argv[2];
yargs.version("1.1.0");

//crate add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding a new note!");
  },
});

console.log(yargs.argv);
