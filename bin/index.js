#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();
const { temperatureSelector } = require('../lib/index');
const package = require('../package.json');

program
  .name(package.name)
  .description(package.description)
  .version(package.version);

program.command('temperature')
  .description('Shows temperature information according the parameters provided')
  .argument('<city>', 'Name of the desired city. For cities which name has more than one word please use "" !')
  .option('-c, --current', 'to obtain current information for this city')
  .action(async (args, options) => {
    console.log(await temperatureSelector(args, options));
  })

program.parse();