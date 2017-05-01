'use strict';

const curry = require('./curry');
const fold = require('./fold');
const get = require('./get');
const map = require('./map');

module.exports = {
  curry,
  fold,
  get,
  map,
  reduce: fold
};
