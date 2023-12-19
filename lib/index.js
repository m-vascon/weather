const { currentTemperature, hourlyTemperature } = require('./temperature/index');
const { findCoordinates, temperatureSelector } = require('./utils/index');

module.exports = {
    currentTemperature,
    hourlyTemperature,
    findCoordinates,
    temperatureSelector,
}