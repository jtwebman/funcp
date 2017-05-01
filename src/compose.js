'use strict';

const fold = require('./fold');

function compose(...functions) {
  return (...args) => {
    const [head, ...tail] = functions.reverse();
    return fold((acc, fn) => fn(acc), head(...args), tail);
  };
}

module.exports = compose;
