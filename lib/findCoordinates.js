const axios = require('axios');

async function findCoordinates(cityName) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`,
        headers: { }
      };

    try {
        const { data: { results }} = await axios.request(config);

        return {
            city: results[0].name,
            country: results[0].country,
            state: results[0].admin1,
            latitude: results[0].latitude,
            longitude: results[0].longitude,

        }
    } catch (error) {
        log(`Could not obtain the city coordinates: ${error}`);
    }
}

module.exports.findCoordinates = findCoordinates;