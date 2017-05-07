'use strict';

const type = require('./type');

function createTuple(values) {
  return {
    _type: 'tuple',
    values
  };
}

function equals(tuple, check) {
  if (tuple.values.length !== check.values.length) return false;
  const len = tuple.values.length;
  for(let i = 0; i < len; i++) {
    if (tuple.values[i] !== check.values[i]) return false;
  }
  return true;
}

function map(tuple, cb) {
  return fromArray(tuple.map(cb));
}

function init(...args) {
  if (args.length <= 0) {
    return createTuple([]);
  }
  if(args.length === 1 && type.get(args[0]) === 'array') {
    return createTuple(args[0]);
  }
  return createTuple(args);
}

function toArray(tuple) {
  return tuple.values;
}

function toString(tuple) {
  return `Tuple {${tuple.values.join(', ')}}`;
}

function unpack(tuple, unpacker) {
  return unpacker(...tuple);
}

module.exports = {
  equals,
  fromArray,
  init,
  map,
  toArray,
  toString,
  unpack
};
