const { currentTemperature, hourlyTemperature } = require('../temperature/index');

async function temperatureSelector (args, options ) { 
    if (options.current) {
        return await currentTemperature(args);
    }

    if(options.hourly) {
        return await hourlyTemperature(args);
    }

    return await currentTemperature(args);
}

module.exports.temperatureSelector = temperatureSelector;