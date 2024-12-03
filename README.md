# **File Encryptor and Decryptor**

A lightweight Node.js application for encrypting and decrypting files using XOR encryption. This tool is designed to introduce basic encryption concepts while offering a practical way to protect your data. Perfect for educational use or low-security requirements, the application is simple, customizable, and user-friendly.

---

## **Features**

- **Encrypt Files**: Secure your data with XOR-based encryption.
- **Decrypt Files**: Restore encrypted files to their original state.
- **Custom Keys**: Use a secret key for encryption and decryption.
- **Error Handling**: Comprehensive error checks and user-friendly logs.
- **User-Friendly CLI**: Clear instructions and simple commands.
- **File Safety**: Prevent accidental overwrites by saving output files separately.

> **Note**: XOR encryption is not cryptographically secure. Use it for educational or low-security purposes only.

---

## **Project Structure**

```plaintext
├── encrypt.js        # Core encryption and decryption logic
├── example.js        # CLI wrapper for user interaction
├── teste.txt         # Sample input file for testing
├── README.md         # Documentation
```

---

## **Prerequisites**

1. **Node.js**: Version 14 or later.
2. **npm**: Included with Node.js.

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/ssam246/File-Encryptor-and-Decryptor
cd file-encryptor
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Verify Setup**
Ensure Node.js is installed and working:
```bash
node -v
```

---

## **Usage**

Run the application using Node.js from the terminal.

### **Encrypt a File**
```bash
node example.js encrypt <inputFile> <outputFile> <key>
```

| Parameter     | Description                                                |
|---------------|------------------------------------------------------------|
| `<inputFile>` | Path to the file you want to encrypt.                      |
| `<outputFile>`| Path where the encrypted file will be saved.               |
| `<key>`       | A custom secret key for encryption (minimum 8 characters). |

#### **Example**:
```bash
node example.js encrypt teste.txt teste.enc mysecretkey
```

---

### **Decrypt a File**
```bash
node example.js decrypt <inputFile> <outputFile> <key>
```

| Parameter     | Description                                                |
|---------------|------------------------------------------------------------|
| `<inputFile>` | Path to the encrypted file.                                |
| `<outputFile>`| Path where the decrypted file will be saved.               |
| `<key>`       | The same secret key used for encryption.                   |

#### **Example**:
```bash
node example.js decrypt teste.enc teste.dec mysecretkey
```

---

### **Notes**:
- The key for encryption and decryption must match exactly.
- Output files are saved separately to avoid overwriting the original.

---

## **Example Workflow**

1. Create a text file `teste.txt` with the following content:
   ```plaintext
   Vicente
   Victor
   Sombo
   Testing
   ```

2. **Encrypt the file**:
   ```bash
   node example.js encrypt teste.txt teste.enc mysecurekey
   ```

3. **Decrypt the file**:
   ```bash
   node example.js decrypt teste.enc teste.dec mysecurekey
   ```

4. Verify that `teste.dec` matches the original `teste.txt`.

---

## **Error Handling**

The application handles the following errors:
- Invalid file paths.
- Encryption keys shorter than 8 characters.
- Missing or incorrect arguments.
- File read/write permission issues.

---

## **Contributing**

Contributions are welcome! Here’s how you can contribute:

1. **Fork the repository**:
   ```bash
   git clone https://github.com/ssam246/File-Encryptor-and-Decryptor
   ```

2. **Create a new branch**:
   ```bash
   git checkout -b feature-name
   ```

3. **Commit your changes**:
   ```bash
   git commit -m "Add new feature"
   ```

4. **Push to your branch**:
   ```bash
   git push origin feature-name
   ```

5. **Open a pull request**.

---

## **License**

This project is licensed under the **MIT License**.  

---

## **Disclaimer**

This tool is intended for **educational purposes only**. The XOR encryption used is not secure for protecting sensitive information. For strong encryption, consider using modern cryptographic libraries like `crypto`.

