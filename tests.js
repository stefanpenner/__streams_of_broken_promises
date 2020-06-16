'use strict';
const walkSync = require('walk-sync');
const execa = require('execa');
const { expect } = require('chai');

console.log(`
=================================
  NODE_VERSION: ${ process.version }
=================================`);

describe('mixing promises and streams', function() {
  it('using-pipe-with-stream-finish.js', async function() {
    await execa('node', ['examples/using-pipe-with-stream-finish.js']);
  });

  it('using-pipe-without-promises-with-finished.js', async function() {
    await execa('node', ['examples/using-pipe-without-promises-with-finished.js']);
  });

  it('using-pipe-without-promises.js', async function() {
    await execa('node', ['examples/using-pipe-without-promises.js']);
  });

  it('using-pipe.js', async function() {
    await execa('node', ['examples/using-pipe.js']);
  });

  it('using-pipeline-shim.js', async function() {
    await execa('node', ['examples/using-pipeline-shim.js']);
  });

  it('using-pipeline.js', async function() {
    await execa('node', ['examples/using-pipeline.js']);
  });

  it('using-promise-basic-stream-with-data.js', async function() {
    await execa('node', ['examples/using-promise-basic-stream-with-data.js']);
  });

  it('using-promise-basic-stream.js', async function() {
    const { exitCode } = await execa('node', ['examples/using-promise-basic-stream.js'], {
      reject: false
    });

    expect(exitCode).to.eql(1);
  });

  it('using-promise-next-tick.js', async function() {
    await execa('node', ['examples/using-promise-next-tick.js']);
  });

  it('using-promise-set-immediate.js', async function() {
    await execa('node', ['examples/using-promise-set-immediate.js']);
  });

  it('using-promise-settimout.js', async function() {
    await execa('node', ['examples/using-promise-settimout.js']);
  });

  it('using-promise.js' , async function() {
    const { exitCode } = await execa('node', ['examples/using-promise.js'], {
      reject: false
    });
    expect(exitCode).to.eql(1);
  });

  it('using-promisified-pipeline-shim.js' , async function() {
    await execa('node', ['examples/using-promisified-pipeline-shim.js']);
  });

  it('using-promisified-pipeline.js' , async function() {
    await execa('node', ['examples/using-promisified-pipeline.js']);
  });

  it('using-rsvp.js' , async function() {
    const { exitCode } = await execa('node', ['examples/using-rsvp.js'], {
      reject: false
    });
    expect(exitCode).to.eql(1);
  });
});
