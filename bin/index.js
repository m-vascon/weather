#!/usr/bin/env node
const { Command } = require('commander');
const { temperatureSelector } = require('../lib/index');
const package = require('../package.json');

const program = new Command();

program
  .name(package.name)
  .description(package.description)
  .version(package.version);

program.command('temperature')
  .description('Shows temperature information according the parameters provided')
  .argument('<city>', 'Name of the desired city. For cities which name has more than one word please use "" !')
  .option('--hourly', 'Provides hourly temperature forecast for the informed city')
  .option('-c, --current', 'Provides current information for this city')
  .action(async (args, options) => {
    console.log(await temperatureSelector(args, options));
  })

program.parse();