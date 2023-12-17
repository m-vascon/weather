const axios = require('axios');

function findCordinates(cityName) {
    let latitude = 0;
    let longitude = 0;
    
    if (cityName.toUpperCase() === "CAMPINAS") {
        latitude = -22.9056;
        longitude = -47.0608;
    }
    
    
    return {
        latitude,
        longitude,
    }
}

async function currentTemperature(city) {
    let latitude = findCordinates(city).latitude;
    let longitude = findCordinates(city).longitude;
    
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`,
        headers: {}
    };

    try {
        const response = await axios.request(config);

        return `The current temperature in ${city} is ${response.data.current.temperature_2m} ºC`;
    } catch (error) {
        throw error;
    }
}

module.exports.currentTemperature = currentTemperature;