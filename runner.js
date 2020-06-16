#!/usr/bin/env node --unhandled-rejections=strict
'use strict';

const execa = require('execa');

(async function main() {
  const exitCodes = [];
  for (const version of ['12.15.0', '12.16.0']) {
    const { exitCode,  stdout }  = await execa('volta', [
      'run',
      '--node',
      version,
      'npm',
      'test',
    ], {
      all: true,
      reject: false
    });

    console.log(stdout);

    exitCodes.push({
      version,
      exitCode,
    });
  }

  console.log(exitCodes);
})();
