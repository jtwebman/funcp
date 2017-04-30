'use strict';

function curryReverse(fn) {
  return (...args) => {
    if (fn.length > args.length) {
      return (...rest) => {
        return fn(...rest.reverse(), args.reverse());
      };
    }
    return fn(...args.reverse());
  };
}

module.exports = curryReverse;
