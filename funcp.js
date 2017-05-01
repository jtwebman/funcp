'use strict';

const curry = require('./curry');
const fold = require('./fold');

module.exports = {
  curry,
  fold,
  reduce: fold
};
