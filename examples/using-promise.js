'use strict';

process.exitCode = 1;

(async function main () {
  await new Promise(resolve => { });
  process.exitCode = 0;
  console.log(`${process.version} ${__filename} success`);
})();
