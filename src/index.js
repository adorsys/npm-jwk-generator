const jose = require('node-jose');

async function generateHMACKey() {
  const size = 256;
  const keyStore = await jose.JWK.createKeyStore();
  const key = await keyStore.generate('oct', size, { alg: `HS${size}`, use: 'sig' });
  return key.toJSON(true);
}

module.exports = {
  generateHMACKey,
};
