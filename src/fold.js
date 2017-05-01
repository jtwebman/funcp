'use strict';

const curry = require('./curry');

const fold = curry((fn, startVal, values) => {
  let currentValue = startVal;
  for (let i = 0, len = values.length; i < len; i++) {
    currentValue = fn(currentValue, values[i]);
  }
  return currentValue;
});

module.exports = fold;
