'use strict';

const compose = require('./compose');
const curry = require('./curry');
const fold = require('./fold');
const get = require('./get');
const list = require('./list');
const map = require('./map');
const pipe = require('./pipe');

module.exports = {
  compose,
  curry,
  fold,
  get,
  list,
  map,
  pipe,
  reduce: fold
};
