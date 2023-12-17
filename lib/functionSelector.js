const { currentTemperature } = require('./currentTemperature');
const { hourlyTemperature } = require('./hourlyTemperature');

async function temperatureSelector (args, options ) { 
    if (options.current) {
        return await currentTemperature(args);
    }

    if(options.hourly) {
        return await hourlyTemperature(args);
    }
}

module.exports.temperatureSelector = temperatureSelector;