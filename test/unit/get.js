'use strict';

const assert = require('chai').assert;
const get = require('../../src/get');

describe('get', () => {
  it('calls the property on the object', () => {
    assert.equal('test', get('status', {status: 'test'}));
  });

  it('works even when partially applied', () => {
    const getStatus = get('status');

    assert.equal('test', getStatus({status: 'test'}));
  });
});
