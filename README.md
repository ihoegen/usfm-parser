# usfm-parser
This library takes in USFM text, and outputs it into a JSON format.
It also takes JSON formatted scripture and outputs it into USFM.
## Setup
`npm install usfm-parser`

## Usage
```js
var usfm = require('usfm-parser');
//Convert from USFM to JSON
var toJSON = usfm.toJSON(/**USFM Text**/);
//JSON to USFM
var toUSFM = usfm.toUSFM(toJSON);
```
