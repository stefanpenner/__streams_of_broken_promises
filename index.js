const zlib = require('zlib');
const path = require('path');
const fs = require('fs');

let stream;
async function run() {
  const filename = path.join(process.cwd(), `foobar-v1.0.0.tgz`);

  console.log('prepack');

  const packed = new fs.ReadStream('./index.js');
  const stream = packed.pipe(new zlib.Gzip());

  await new Promise((resolve, reject) => {
    stream.pipe(fs.createWriteStream(filename));
    stream.on('data', reject);
    stream.on('error', reject);
    stream.on('close', resolve);
  });

  // in => 12.16 we never reach this, but it appears we also don't throw and
  // exception. What is going on
  console.log('postpack');
}

(async function() {
  console.log('before:run')
  try {
    await run();
    // in now => 12.16 we never reach this
    console.log('after:run')
  } catch(e) {
    // in now => 12.16 we never reach this
    console.log('error');
    console.log(e);
  } finally {
    // in now => 12.16 we never reach this
    console.log('finally');
  }
  debugger;
})();