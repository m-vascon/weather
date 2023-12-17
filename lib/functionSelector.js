const { currentTemperature } = require('./currentTemperature');

async function temperatureSelector (args, options ) { 
    if (options.current) {
        return await currentTemperature(args);
    }
}

module.exports.temperatureSelector = temperatureSelector;