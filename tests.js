'use strict';
const execa = require('execa');
console.log(`
=================================
  NODE_VERSION: ${ process.version }
=================================`);

describe('mixing promises and streams', function() {
  it('works using pipe directly', function() {
    execa.sync('node', [`${__dirname}/using-pipe.js`]);
  });

  it('works using pipeline', function() {
    execa.sync('node', [`${__dirname}/using-pipeline.js`]);
  });

  it('works using promisified pipeline', function() {
    execa.sync('node', [`${__dirname}/using-promisified-pipeline.js`]);
  });
});
