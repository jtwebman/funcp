'use strict';

const assert = require('chai').assert;
const compose = require('../../src/compose');

const subtractOne = (x) => x - 1;
const multiply = (x, y) => x * y;

describe('compose', () => {
  it('merges two functions into one', () => {
    const testFunction = compose(subtractOne, multiply);
    assert.equal(24, testFunction(5, 5));
  });

  it('merges many functions into one', () => {
    const testFunction = compose(subtractOne, subtractOne, subtractOne,
      subtractOne, multiply);
    assert.equal(96, testFunction(10, 10));
  });

  it('a single function still works', () => {
    const testFunction = compose(subtractOne);
    assert.equal(24, testFunction(25));
  });
});
