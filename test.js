const assert = require('assert')
const lib = require('./index')
const username = lib.generate()
assert.ok(username)