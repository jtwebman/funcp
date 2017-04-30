'use strict';

function curry(fn) {
  return (...args) => {
    if (fn.length > args.length) {
      return (...rest) => {
        const allArgs = args.concat(rest);
        return fn(...allArgs);
      };
    }
    return fn(...args);
  };
}

module.exports = curry;
