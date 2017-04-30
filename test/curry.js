'use strict';

const assert = require('chai').assert;
const curry = require('../curry');

describe('curry', () => {
  it('will return a function if only partially provided arguments', () => {
    const add = curry((x, y) => {
      return x + y;
    });

    const addFive = add(5);

    assert.isFunction(addFive);
    assert.equal(6, addFive(1));
  });

  it('will return a value if all arguments provided', () => {
    const add = curry((x, y) => {
      return x + y;
    });

    const value = add(5, 1);

    assert.isNotFunction(value);
    assert.equal(6, value);
  });

  it('will work with spreads', () => {
    const add = curry((...values) => {
      return values.reduce((acc, val) => {
        acc += val;
        return acc;
      }, 0);
    });

    const value = add(5, 1, 3);

    assert.isNotFunction(value);
    assert.equal(9, value);
  });

  it('will work with spreads but always returns values not a function', () => {
    const add = curry((...values) => {
      return values.reduce((acc, val) => {
        acc += val;
        return acc;
      }, 0);
    });

    const value = add(5);

    assert.isNotFunction(value);
    assert.equal(5, value);
  });
});
