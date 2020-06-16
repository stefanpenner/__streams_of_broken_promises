'use strict';

const zlib = require('zlib');
const fs = require('fs');

const file = fs.createReadStream(__filename);
fs.writeFileSync(`${__filename}-out.js`)

const stream = file.pipe(new zlib.Gzip());
stream.pipe(fs.createWriteStream(`${__filename}-out.js`));

stream.on('close', () => {
  console.log(`${process.version} ${__filename} success`);
  process.exitCode = 0;
});
