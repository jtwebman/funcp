'use strict';

function curry(fn) {
  return (...args) => {
    if (fn.length > args.length) {
      return (...rest) => {
        return fn(...args, ...rest);
      };
    }
    return fn(...args);
  };
}

module.exports = curry;
