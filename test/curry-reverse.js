'use strict';

const assert = require('chai').assert;
const curryReverse = require('../curry-reverse');

const split = curryReverse((str, splitOn) => {
  return str.split(splitOn);
});

const concatReverse = curryReverse((...values) => {
  return values.reduce((acc, val) => {
    acc += val;
    return acc;
  }, '');
});

describe('curry-reverse', () => {
  it('will return a function if only partially provided arguments', () => {
    const splitOnSpace = split(' ');

    assert.isFunction(splitOnSpace);
    assert.deepEqual(['1', '2', '3'], splitOnSpace('1 2 3'));
  });

  it('will return a value if all arguments provided', () => {
    const value = split(' ', '1 2 3');

    assert.isNotFunction(value);
    assert.deepEqual(['1', '2', '3'], value);
  });

  it('will work with spreads', () => {
    const value = concatReverse('a', 'b', 'c');

    assert.isNotFunction(value);
    assert.equal('cba', value);
  });

  it('will work with spreads but always returns values not a function', () => {
    const value = concatReverse('a');

    assert.isNotFunction(value);
    assert.equal('a', value);
  });
});
