var uniqueRandomArray = require('unique-random-array');
var cities = require('./cities.json');

module.exports = {
  all: cities,
  random: uniqueRandomArray(cities)
}
