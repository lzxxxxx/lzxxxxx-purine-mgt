const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const header = {
  alg: 'RS256',
  typ: 'JWT',
  kid: 'gBMx4K79DnAaH3GTL9EYFmiAhbcXjFJMf9jc5_E1hnM'
};

const privateKey = fs.readFileSync(path.join(__dirname, '../private_key.pem'));

const generateToken = () => {
    const payload = {
        iss: '1128970801535',
        aud: 'api.coze.cn',
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 900,
        jti: Date.now() + ''
    };
    const token = jwt.sign(payload, privateKey, {
        algorithm: 'RS256',
        header
    });

    return token;
};

module.exports = generateToken;
