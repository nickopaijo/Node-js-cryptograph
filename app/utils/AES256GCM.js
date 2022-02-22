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