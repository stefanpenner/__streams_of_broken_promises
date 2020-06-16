'use strict';

const zlib = require('zlib');
const fs = require('fs');
const { pipeline } = require('stream');
const { promisify } = require('util');

const pipe = promisify(pipeline);
process.exitCode = 1;

(async () => {
  const file = fs.createReadStream(__filename);

  const stream = file.pipe(new zlib.Gzip());

  await pipe(stream, fs.createWriteStream(`${__filename}-out.js`));

  console.log(`${process.version} ${__filename} success`);
  process.exitCode = 0;
})();
