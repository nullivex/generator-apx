/*global describe, it*/

var assert = require('assert')

describe('apx generator', function () {
  it('can be imported without blowing up', function () {
    var app = require('../app')
    assert(app !== undefined)
  })
})
