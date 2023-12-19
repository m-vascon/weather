const axios = require('axios');
const { findCoordinates } = require('../utils/findCoordinates');

async function currentTemperature(city) {
    try {
        const { country, state, latitude, longitude } = await findCoordinates(city);

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`,
            headers: {}
        };

        const { data: { current }} = await axios.request(config);

        return `The current temperature at ${city}, state of ${state} in ${country} is ${current.temperature_2m} ºC`;
    } catch (error) {
        throw error;
    }
}

module.exports.currentTemperature = currentTemperature;