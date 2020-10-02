import Yelp from './Yelp';

const assert = require('assert');

describe('Yelp', () => {
  it('connect to yelp', (done) => {
    const inputTerm = 'Pizza';
    const inputLocation = 'Newyork';
    const inputSortBy = 'best_match';
    Yelp.search(inputTerm, inputLocation, inputSortBy).then((value) => {
      assert.strictEqual(20, value.length);
    });
    done();
  });
});