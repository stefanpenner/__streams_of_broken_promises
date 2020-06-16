process.exitCode = 1;
const fs = require('fs');

process.exitCode = 1;

(async function main () {
  const file = fs.createReadStream(__filename);

  await new Promise(resolve => {
    file.on('close', resolve);
  });

  console.log(`${process.version} ${__filename} success`);
  process.exitCode = 0;
})();
