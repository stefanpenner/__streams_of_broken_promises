#!/usr/bin/env node --unhandled-rejections=strict
'use strict';

const execa = require('execa');

(async function main() {
  const exitCodes = [];
  for (const version of [
'12.13.0',
'12.15.0',
'12.16.0',
'13.0.0',
'13.1.0',
'13.2.0',
'13.3.0',
'13.4.0',
'13.5.0',
'13.6.0',
'13.7.0',
'13.8.0',
'13.9.0',
'13.10.0',
'13.11.0',
'13.12.0',
'13.13.0',
'13.14.0',
'14.0.0',
'14.1.0',
'14.2.0',
'14.3.0',
'14.4.0',
  ]) {
    const args = [
      'run',
      '--node',
      version,
      'npm',
      'test',
    ]
    const { exitCode,  stdout }  = await execa('volta', args, {
      all: true,
      reject: false
    });

    console.log(stdout);

    exitCodes.push({
      version,
      exitCode,
      command: `volta ${args.join(' ')}`,
    });
  }

  console.log(exitCodes);
})();
