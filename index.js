#!/usr/bin/env node

const { program } = require("commander");
const { save, open, remove } = require("./helpers/actions");
program.version("1.0.0");

program
  .command("add")
  .description("Give the path for the Project Directory")
  .alias("save")
  .action(save)

program
  .command("open <projectName>")
  .description("Name of the project that needs to be opened")
  .alias("o")
  .action(open)

program
  .command("remove <projectName>")
  .description("Remove the project from the bookmarks list")
  .alias("r")
  .action(remove)

program.parse(process.argv)