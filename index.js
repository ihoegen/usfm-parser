var usfmToJson = require('./src/js/usfmToJson.js').usfmToJSON;
var jsonToUsfm = require('./src/js/jsonToUsfm.js').jsonToUSFM;

exports.toJSON = usfmToJson;
exports.toUSFM = jsonToUsfm;
