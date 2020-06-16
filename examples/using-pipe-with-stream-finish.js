'use strict';

const zlib = require('zlib');
const fs = require('fs');

process.exitCode = 1;

(async () => {
  const file = fs.createReadStream(__filename);

  const stream = file.pipe(new zlib.Gzip());

  await new Promise((resolve, reject) => {
    stream.pipe(fs.createWriteStream(`${__filename}-out.js`));
    stream.on('error', reject);
    stream.on('finish', resolve);
  });

  console.log(`${process.version} ${__filename} success`);
  process.exitCode = 0;
})();
