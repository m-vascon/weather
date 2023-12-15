#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();
const { currentTemperature } = require('../lib/index')

program
  .name('weather')
  .description('CLI to show the weather')
  .version('0.1.0');

program.command('current')
  .description('Shows the current weather')
  .action(async () => {
    console.log(await currentTemperature());
  });

program.parse();