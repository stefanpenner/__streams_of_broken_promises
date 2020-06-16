'use strict';

const zlib = require('zlib');
const fs = require('fs');

process.exitCode = 1;

(async () => {
  const file = fs.createReadStream(__filename);
  fs.writeFileSync(`${__filename}-out.js`)

  const stream = file.pipe(new zlib.Gzip());

  await new Promise((resolve, reject) => {
    stream.pipe(fs.createWriteStream(`${__filename}-out.js`));
    stream.on('error', reject);
    stream.on('close', resolve);
  });

  console.log(`${__filename} success`);
  process.exitCode = 0;
})();


