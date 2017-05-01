'use strict';

const assert = require('chai').assert;
const pipe = require('../../src/pipe');

const subtractOne = (x) => x - 1;
const multiply = (x, y) => x * y;

describe('pipe', () => {
  it('merges two functions into one', () => {
    const testFunction = pipe(multiply, subtractOne);
    assert.equal(24, testFunction(5, 5));
  });

  it('merges many functions into one', () => {
    const testFunction = pipe(multiply, subtractOne, subtractOne,
      subtractOne, subtractOne);
    assert.equal(96, testFunction(10, 10));
  });

  it('a single function still works', () => {
    const testFunction = pipe(subtractOne);
    assert.equal(24, testFunction(25));
  });
});
