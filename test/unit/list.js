'use strict';

const assert = require('chai').assert;
const list = require('../../src/list');

describe('list', () => {
  it('init returns a proper list with array', () => {
    assert.equal(24, list.init([5, 5]));
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
