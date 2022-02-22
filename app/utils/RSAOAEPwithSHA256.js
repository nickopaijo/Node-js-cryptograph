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

/*module.exports = {
    //RSA-OAEP-WITH-SHA-256
    encrypts: function(message, key) {
        const cipher = Crypto.createCipher('RSA-OAEP-WITH-SHA-256', key);
        let encrypted = cipher.update(message, 'utf8', 'base64');
        encrypted += cipher.final('base64');
        //return encrypted;
        //console.log('enkripsi : '+encrypted);
        return encrypted;
    },

    decrypts: function(message, key) {
        const decipher = Crypto.createDecipher('RSA-OAEP-WITH-SHA-256', key);
        let decrypted = decipher.update(message, 'base64', 'utf8');
        decrypted += decipher.final('base64');
        //return decrypted;
        //console.log('dekripsi : '+decrypted);
        return decrypted;
    }
}*/


/*module.exports = {
    //RSA-OAEP-WITH-SHA-256
    encrypts: function(message, publicKey) {
        const key = Crypto.createPublicKey(publicKey);
        const encrypted = key.encrypt(message, 'base64');
        return encrypted;
    },

    decrypts: function(message, privateKey) {
        const key = Crypto.createPrivateKey(privateKey);
        const decrypted = key.decrypt(message, 'base64');
        return decrypted;
    }
}*/

/*
// encrypts a message with RSA-OAEP with SHA256
// @param {string} message - the message to encrypt
// @param {string} publicKey - the public key to encrypt with
// @return {string} the encrypted message
function encrypt(message, publicKey) {
    const key = Crypto.createPublicKey(publicKey);
    const encrypted = key.encrypt(message, 'base64');
    return encrypted;
}


// decrypts a message with RSA-OAEP with SHA256
// @param {string} message - the message to decrypt
// @param {string} privateKey - the private key to decrypt with
// @return {string} the decrypted message
function decrypt(message, privateKey) {
    const key = Crypto.createPrivateKey(privateKey);
    const decrypted = key.decrypt(message, 'base64');
    return decrypted;
}

exports.Rsaencrypt = encrypt;
exports.Rsadecrypt = decrypt;*/