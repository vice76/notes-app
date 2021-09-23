const yargs = require("yargs");
const chalk = require("chalk");
const fs = require("./utils.js");

//const command = process.argv[2];
yargs.version("1.1.0");

//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title : " + argv.title);
    console.log("Body : " + argv.body);
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "Remove a new note",
  handler: function () {
    console.log("Removing  a old note!");
  },
});

//create list command
yargs.command({
  command: "list",
  describe: "List a new note",
  handler: function () {
    console.log("Listing out all note!");
  },
});

//create read command
yargs.command({
  command: "read",
  describe: "Read a new note",
  handler: function () {
    console.log("Reading a note!", argv);
  },
});

yargs.parse();
