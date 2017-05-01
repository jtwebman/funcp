'use strict';

const assert = require('chai').assert;
const map = require('../../src/map');

const double = (val) => val + val;

describe('map', () => {
  it('maps over array calling the function', () => {
    assert.deepEqual([10, 2, 6], map(double, [5, 1, 3]));
  });

  it('works even when partially applied', () => {
    const doubleList = map(double);

    assert.deepEqual([10, 2, 6], doubleList([5, 1, 3]));
  });

  it('does not change the the array passed in', () => {
    let values = [5, 1, 3];
    map(double, values);
    assert.deepEqual([5, 1, 3], values);
  });
});
