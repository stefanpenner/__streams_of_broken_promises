process.exitCode = 1;
const fs = require('fs');

(async function main () {
  const file = fs.createReadStream(__filename);

  await new Promise(resolve => {
    file.on('close', resolve);
    file.on('data', () => {});
  });

  process.exitCode = 0;
  console.log(`${process.version} ${__filename} success`);
})();
