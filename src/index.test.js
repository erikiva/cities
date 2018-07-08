var expect = require('chai').expect;
var cities = require('./index');

describe('cities', function() {
  describe('all', function() {
    it('should be an array of objects', function() {
      expect(cities.all).to.satisfy(isArrayOfObjects);

      function isArrayOfObjects(array) {
        return array.every(function(elem) {
          return typeof elem === 'object';
        });
      }
    });
    it('should contain Cambridge', function() {
      expect(cities.all).to.deep.include({
        city: 'Cambridge',
        state: 'Massachusetts'
      });
    });
  });
  describe('random', function() {
    it('should return a random city object', function() {
      var randomCity = cities.random();
      expect(cities.all).to.deep.include(randomCity);
    });
  });
});
