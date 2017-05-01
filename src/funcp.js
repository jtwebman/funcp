'use strict';

const compose = require('./compose');
const curry = require('./curry');
const fold = require('./fold');
const get = require('./get');
const map = require('./map');
const pipe = require('./pipe');

module.exports = {
  compose,
  curry,
  fold,
  get,
  map,
  pipe,
  reduce: fold
};
