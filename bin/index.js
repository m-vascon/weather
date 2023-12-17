#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();
const { currentTemperature } = require('../lib/index');
const package = require('../package.json');

program
  .name(package.name)
  .description(package.description)
  .version(package.version);

program.command('current')
  .description('Shows the current weather')
  .action(async () => {
    console.log(await currentTemperature());
  });

program.parse();