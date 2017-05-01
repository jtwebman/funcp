'use strict';

const fold = require('./fold');

function pipe(...functions) {
  return (...args) => {
    const [head, ...tail] = functions;
    return fold((acc, fn) => fn(acc), head(...args), tail);
  };
}

module.exports = pipe;
