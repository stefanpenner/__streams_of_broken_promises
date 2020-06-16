'use strict';

const zlib = require('zlib');
const fs = require('fs');
const { finished } = require('stream');

const file = fs.createReadStream(__filename);
fs.writeFileSync(`${__filename}-out.js`)

const stream = file.pipe(new zlib.Gzip());

finished( stream.pipe(fs.createWriteStream(`${__filename}-out.js`)), err => {
  console.log(`${process.version} ${__filename} success`);
  process.exitCode = 0;
});
