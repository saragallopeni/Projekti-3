const crypto = require('crypto');

const secretKey = crypto.randomBytes(16).toString('hex');

console.log('Celesi :', secretKey);
