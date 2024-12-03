const fs = require('fs');
const crypto = require('crypto');

/**
 * Encrypt a file with XOR encryption.
 * @param {string} inputFile - Path to the input file.
 * @param {string} outputFile - Path to save the encrypted file.
 * @param {string} key - Encryption key.
 */
function encryptFile(inputFile, outputFile, key) {
    try {
        const data = fs.readFileSync(inputFile);
        const buffer = Buffer.from(data);
        const keyBuffer = Buffer.from(key, 'utf-8');
        const outputBuffer = Buffer.alloc(buffer.length);

        for (let i = 0; i < buffer.length; i++) {
            outputBuffer[i] = buffer[i] ^ keyBuffer[i % keyBuffer.length];
        }

        fs.writeFileSync(outputFile, outputBuffer);
        console.log(`[+] File encrypted successfully: ${outputFile}`);
    } catch (err) {
        console.error(`[-] Error encrypting file: ${err.message}`);
    }
}

/**
 * Decrypt a file with XOR encryption.
 * @param {string} inputFile - Path to the encrypted file.
 * @param {string} outputFile - Path to save the decrypted file.
 * @param {string} key - Decryption key (must be the same as the encryption key).
 */
function decryptFile(inputFile, outputFile, key) {
    try {
        const data = fs.readFileSync(inputFile);
        const buffer = Buffer.from(data);
        const keyBuffer = Buffer.from(key, 'utf-8');
        const outputBuffer = Buffer.alloc(buffer.length);

        for (let i = 0; i < buffer.length; i++) {
            outputBuffer[i] = buffer[i] ^ keyBuffer[i % keyBuffer.length];
        }

        fs.writeFileSync(outputFile, outputBuffer);
        console.log(`[+] File decrypted successfully: ${outputFile}`);
    } catch (err) {
        console.error(`[-] Error decrypting file: ${err.message}`);
    }
}

module.exports = { encryptFile, decryptFile };
