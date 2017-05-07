'use strict';

function fromNumber(value) {
  if (!isFinite(value)) {
    if (value === Number.POSITIVE_INFINITY) {
      return 'infinity';
    } else if (value === Number.NEGATIVE_INFINITY) {
      return '-infinity';
    } else {
      return 'nan';
    }
  } else if (value % 1 !== 0) {
    return 'float';
  } else {
    return 'integer';
  }
}

function fromObject(value) {
  if (Array.isArray(value)) {
    return 'array';
  } else if (value === null) {
    return 'null';
  } else if (typeof value._type === 'string') {
    return value._type;
  } else {
    return 'object';
  }
}

const mapType = {
  boolean: () => 'boolean',
  function: () => 'function',
  number: fromNumber,
  object: fromObject,
  string: () => 'string',
  symbol: () => 'symbol',
  undefined: () => 'undefined'
};

function get(value) {
  return mapType[typeof value](value);
}

module.exports = {
  get
};
