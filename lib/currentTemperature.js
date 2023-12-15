const axios = require('axios');

async function currentTemperature() {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.open-meteo.com/v1/forecast?latitude=-22.9056&longitude=-47.0608&current=temperature_2m',
        headers: {}
    };

    try {
        const response = await axios.request(config);

        return `The current temperature in Campinas is ${response.data.current.temperature_2m} ºC`;
    } catch (error) {
        throw error;
    }
}

module.exports.currentTemperature = currentTemperature;