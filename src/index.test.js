require('babel-polyfill');

const jwkGenerator = require('../dist/index');
const t = require('tap');

t.test('jwkGenerator', (t1) => {
  t1.type(jwkGenerator, 'object', 'is an object');
  t1.type(jwkGenerator.generateHMACKey, 'function', 'has a function generateHMACKey');

  t1.test('generateHMACKey', async (t2) => {
    t2.ok(jwkGenerator.generateHMACKey.length === 0, 'is expecting no arguments');

     // arrange
    const expectedSchema = {
      kty: 'oct',
      kid: /[a-zA-Z0-9-_]*/,
      use: 'sig',
      alg: 'HS256',
      k: /[a-zA-Z0-9-_]*/,
    };

    // act
    const key = await jwkGenerator.generateHMACKey();

    // assert
    t2.match(key, expectedSchema, 'returns an object with expected schema');
    t2.end();
  });
  t1.end();
});
