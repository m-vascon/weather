const axios = require('axios');
const { findCoordinates } = require('../utils/findCoordinates');

function formatedTemperatureForecast(time, temperature) {
    let finalForecastString = "";

    for (let i = 0; i < time.length; i++) {
        finalForecastString += "\n" + `${time[i]} -> ${temperature[i]} ºC`;
    }

    return finalForecastString;
}

async function hourlyTemperature(city) {
    try {
        const { country, state, latitude, longitude } = await findCoordinates(city);

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&forecast_hours=12&timezone=auto`,
            headers: {}
        };

        const { data: { hourly: { time, temperature_2m: temperature } } } = await axios.request(config);

        return `The hourly temperature forecast for the city of ${city}, state of ${state}, in ${country} in the next 12 hours will be:` 
        + formatedTemperatureForecast(time, temperature);
    } catch (error) {
        console.error(`Failed to obtain hourly temperature forecast - error: ${error}`);
    }
}

hourlyTemperature("Campinas");

module.exports.hourlyTemperature = hourlyTemperature;