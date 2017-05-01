'use strict';

const curry = require('./curry');
const fold = require('./fold');
const map = require('./map');

module.exports = {
  curry,
  fold,
  map,
  reduce: fold
};
