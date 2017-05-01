'use strict';

const curry = require('./curry');
const fold = require('./fold');

const map = curry((fn, values) => {
  return fold((acc, val) => {
    acc.push(fn(val));
    return acc;
  }, [], values);
});

module.exports = map;
