'use strict';

const myPackage = require('..');
const assert = require('assert').strict;

console.log('执行了');

assert.strictEqual(myPackage(), 'Hello from myPackage');
console.info('myPackage tests passed');
