const usfmToJson = require('../src/js/usfmToJson.js').usfmToJSON;
const jsonToUsfm = require('../src/js/jsonToUsfm.js').jsonToUSFM;
const assert = require('chai').assert;
const fs = require('fs');

var converted;
describe('usfmToJson', function() {
  it('usfmToJson should take in a usfm source file, and convert it to a JSON format', function(done) {
    this.timeout(50000);
    fs.readFile('./tests/static/3john.usfm', function(err, data) {
      assert.isNull(err);
      converted = usfmToJson(data.toString());
      assert.isObject(converted);
      assert.isObject(converted.headers);
      assert.equal(converted.headers.h, '3 John');
      assert.isArray(converted.chapters);
      done();
    });
  });
});

describe('jsonToUsfm', function() {
  it('jsonToUsfm should take in a JSON object, and convert it to a string file', function() {
    var backToString = jsonToUsfm(converted);
    assert.isString(backToString);
    assert.equal(1752, backToString.length);
  });
});
