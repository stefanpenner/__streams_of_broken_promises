'use strict';

const zlib = require('zlib');
const fs = require('fs');
const { pipeline } = require('stream');

process.exitCode = 1;
(async () => {
  const file = fs.createReadStream(__filename);
  fs.writeFileSync(`${__filename}-out.js`)

  const stream = file.pipe(new zlib.Gzip());

  await new Promise((resolve, reject) => {
    pipeline(stream,
      fs.createWriteStream(`${__filename}-out.js`), err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });

  console.log(`${process.version} ${__filename} success`);
  process.exitCode = 0;
})();
