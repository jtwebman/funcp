/* eslint no-array-constructor: "off", no-new-object: "off" */
'use strict';

const assert = require('chai').assert;
const type = require('../../src/type');

function ConstructorFunction(name) {
  this.name = name;
}

const testMaps = [
  {comp: 'boolean', val: true},
  {comp: 'boolean', val: false},
  {comp: 'function', val: () => null, txt: '() => null'},
  {comp: 'function', val: function() {}, txt: 'function() {}'},
  {comp: 'function', val: function named() {}, txt: 'function named() {}'},
  {comp: 'function', val: ConstructorFunction, txt: 'defined function'},
  {comp: 'float', val: 1.3},
  {comp: 'float', val: -1.32132},
  {comp: 'float', val: Number.MIN_VALUE, txt: 'Number.MIN_VALUE'},
  {comp: 'integer', val: 127318973},
  {comp: 'integer', val: -1},
  {comp: 'integer', val: Number.MAX_VALUE, txt: 'Number.MAX_VALUE'},
  {comp: 'integer', val: Number.MIN_SAFE_INTEGER, txt: 'Number.MIN_SAFE_INTEGER'},
  {comp: 'integer', val: Number.MIN_SAFE_INTEGER, txt: 'Number.MIN_SAFE_INTEGER'},
  {comp: 'nan', val: Number.NaN, txt: 'Number.NaN'},
  {comp: 'infinity', val: Number.POSITIVE_INFINITY, txt: 'Number.POSITIVE_INFINITY'},
  {comp: '-infinity', val: Number.NEGATIVE_INFINITY, txt: 'Number.NEGATIVE_INFINITY'},
  {comp: 'array', val: [1, 2, 3]},
  {comp: 'array', val: []},
  {comp: 'array', val: new Array(), txt: 'new Array())'},
  {comp: 'null', val: null},
  {comp: 'custom', val: {_type: 'custom'}, txt: 'object has _type = \'custom\''},
  {comp: 'object', val: {}, txt: '{}'},
  {comp: 'object', val: Object.create(null), txt: 'Object.create(null)'},
  {comp: 'object', val: new ConstructorFunction('test'), txt: 'new constructor function'},
  {comp: 'string', val: '', txt: '\'\''},
  {comp: 'string', val: 'a string'},
  {comp: 'symbol', val: Symbol(), txt: 'Symbol()'},
  {comp: 'symbol', val: Symbol('test'), txt: 'Symbol(\'test\')'},
  {comp: 'undefined', val: undefined, txt: 'undefined'}
];

describe('type', () => {
  describe('get', () => {
    testMaps.forEach((test) => {
      it(`returns ${test.comp} when ${test.txt || test.val} is passed`, () => {
        assert.equal(test.comp, type.get(test.val));
      });
    });
  });
});
