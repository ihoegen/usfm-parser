var usfmToJson = require('./src/js/usfmToJson.js').usfmToJSON;
var jsonToUsfm = require('./src/js/jsonToUsfm.js').jsonToUSFM;
var getHeaders = require('./src/js/getHeaders.js');
var parseTargetLanguage = require('./src/js/parseTargetLanguage.js');

exports.toJSON = usfmToJson;
exports.toUSFM = jsonToUsfm;
exports.getHeaders = getHeaders;
exports.parseTargetLanguage = parseTargetLanguage;
