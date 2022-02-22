const nodeRSA = require('node-rsa');

const key = new nodeRSA({b: 512});

module.exports = {
    encrypt: function(message, publickey) {     
        const encrypted = key.encrypt(message, 'base64');
        return encrypted;
    },

    decrypt: function(message, privatekey) {
        const decrypted = key.decrypt(message, 'utf8');
        return decrypted;
    }
}