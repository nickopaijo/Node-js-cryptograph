const http = require('http');
const crypto = require('crypto');
const AES256GCM = require('./app/utils/AES256GCM.js');
const RSAOAEPwithSHA256 = require('./app/utils/RSAOAEPwithSHA256.js');
const constants = require('./app/config/constants.js');

const hostname = '127.0.0.1';
const port = 6080;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

var randomkey = crypto.randomBytes(32);

//RSA crypto
var RSAencrypt = RSAOAEPwithSHA256.encrypt(randomkey, constants.publicKey);
var RSAdecrypt = RSAOAEPwithSHA256.decrypt(RSAencrypt, constants.privateKey);

//AES crypto
var messages = {"name":"John","age":30,"city":"New York"};
var message = JSON.stringify(messages);
var AESencrypt = AES256GCM.encrypts(message, randomkey);
var AESdecrypt = AES256GCM.decrypts(AESencrypt, randomkey);

//create JSON format
let jsonFormat_encrypt = {"Encryption":{"Secret": RSAencrypt, "Content": AESencrypt}};
let jsonFormat_decrypt = {"Decryption":{"Secret": RSAdecrypt, "Content": AESdecrypt}};
var jsonEncrypt = JSON.stringify(jsonFormat_encrypt);
var jsonDecrypt = JSON.stringify(jsonFormat_decrypt);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log('RSA encrypt: ' + RSAencrypt);
    console.log('RSA decrypt: ' + RSAdecrypt);
    console.log('AES encrypt: ' + AESencrypt);
    console.log('AES decrypt : '+ AESdecrypt);
    console.log('json encrypt: ' + jsonEncrypt);
    console.log('json decrypt: ' + jsonDecrypt);
});