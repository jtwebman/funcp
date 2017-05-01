'use strict';

const curry = require('./curry');

const get = curry((property, object) => {
  return object[property];
});

module.exports = get;
