'use strict';

const type = require('./type');

function create(item, next) {
  return {
    _type: 'list',
    item,
    next
  };
}

function createFromArray(items) {
  for (let i = 0, len = items.length; i < len; i++) {

  }
}

const empty = create(null, null);

function init(state) {
  switch(type.get(state[0])) {
    case 'array':
      return createFromArray(state);
    case 'list':

    case 'null':
    case 'undefined':
      return empty;
    default:
      return {
        item: state,
        next: null
      };
  }
  return type.init('list', getByType, state);
}

module.exports = {
  init
};
