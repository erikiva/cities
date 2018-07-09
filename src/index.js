import uniqueRandomArray from 'unique-random-array';
import cities from './cities.json';

var getRandomCity = uniqueRandomArray(cities);

module.exports = {
  all: cities,
  random: random
};

function random(number) {
  if (typeof number === 'undefined') {
    return getRandomCity();
  } else {
    var cities = [];
    for (var i = 0; i < number; i++) {
      cities.push(getRandomCity());
    }
    return cities;
  }
}
