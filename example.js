const { encryptFile, decryptFile } = require('./encrypt');
const path = require('path');

function printUsage() {
    console.log(`
Usage:
  node example.js encrypt <inputFile> <outputFile> <key>
  node example.js decrypt <inputFile> <outputFile> <key>

Parameters:
  <inputFile>  - Path to the file to encrypt or decrypt
  <outputFile> - Path to save the encrypted or decrypted file
  <key>        - Encryption/Decryption key (must match for both operations)
  
Example:
  Encrypt: node example.js encrypt teste.txt teste.enc mysecretkey
  Decrypt: node example.js decrypt teste.enc teste.dec mysecretkey
`);
}

// CLI Handler
const args = process.argv.slice(2);

if (args.length < 4) {
    printUsage();
    process.exit(1);
}

const [action, inputFile, outputFile, key] = args;

// Validate the key length
if (key.length < 8) {
    console.error('[-] Key must be at least 8 characters long.');
    process.exit(1);
}

if (!['encrypt', 'decrypt'].includes(action)) {
    console.error(`[-] Invalid action: ${action}`);
    printUsage();
    process.exit(1);
}

// Perform the action
if (action === 'encrypt') {
    encryptFile(inputFile, outputFile, key);
} else if (action === 'decrypt') {
    decryptFile(inputFile, outputFile, key);
}
