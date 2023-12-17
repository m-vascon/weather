#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();
const { currentTemperature } = require('../lib/index');
const { temperatureSelector } = require('../lib/index');
const package = require('../package.json');

program
  .name(package.name)
  .description(package.description)
  .version(package.version);

// program.command('current')
//   .description('Shows the current weather')
//   .argument('<city>', 'name of the desired city')
//   .action(async (city) => {
//     console.log(await currentTemperature(city));
//   });

program.command('temperature')
  .description('Shows temperature information according the parameters provided')
  .argument('<city>', 'Name of the desired city')
  .option('-c, --current', 'to obtain current information for this city')
  .action(async (args, options) => {
    console.log(await temperatureSelector(args, options));
  })

program.parse();