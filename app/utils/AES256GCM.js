const Crypto = require('crypto');

module.exports = {
    encrypts: function(message, key) {
        const iv = Crypto.randomBytes(12).toString('base64');
        const tag = Crypto.randomBytes(16).toString('base64');
        const cipher = Crypto.createCipheriv('aes-256-gcm', key, iv);
        let encrypted = cipher.update(message, 'utf8', 'base64');
        encrypted += cipher.final('base64');
        return iv + tag + encrypted;
    },

    decrypts: function(message, key) { 
        const iv = Buffer.from(message.substring(0, 16));
        const tag = Buffer.from(message.substring(16, 40));
        const encrypted = message.substring(40);
        const decipher = Crypto.createDecipheriv('aes-256-gcm', key, iv);
        decipher.setAuthTag
        let decrypted = decipher.update(encrypted, 'base64', 'utf8');
        //decrypted += decipher.final('utf8');
        return decrypted;
    }
}

/*
//encrypts with AES-256-GCM
//@param {string} message - the message to encrypt
//@param {string} key - the key to encrypt with
//@return {string} the encrypted message
function encrypt(message, key) {
    const cipher = Crypto.createChiperIv('aes-256-gcm', )
}
function encrypt(message, key) {
    const cipher = Crypto.createCipheriv('aes-256-gcm', key, key);
    let encrypted = cipher.update(message, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    //return encrypted;
    console.log(encrypted);
}


//decrypts with AES-256-GCM
//@param {string} message - the message to decrypt
//@param {string} key - the key to decrypt with
//@return {string} the decrypted message
function decrypt(message, key) {
    const decipher = Crypto.createDecipheriv('aes-256-gcm', key, key);
    let decrypted = decipher.update(message, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

exports.encrypts = encrypt;
exports.decrypts = decrypt;*/