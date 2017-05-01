'use strict';

const assert = require('chai').assert;
const fold = require('../fold');

describe('fold', () => {
  it('works returning one value', () => {
    assert.equal(9, fold((acc, val) => acc + val, 0, [5, 1, 3]));
  });

  it('works returning one value even when partially applied', () => {
    const addAll = fold((acc, val) => acc + val, 0);

    assert.equal(9, addAll([5, 1, 3]));
  });

  it('does not change the start value', () => {
    let startValue = 0;
    fold((acc, val) => acc + val, startValue, [5, 1, 3]);
    assert.equal(0, startValue);
  });

  it('does not change the the array passed in', () => {
    let values = [5, 1, 3];
    fold((acc, val) => acc + val, 0, values);
    assert.deepEqual([5, 1, 3], values);
  });
});
