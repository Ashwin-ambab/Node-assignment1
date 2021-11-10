const crypto = require("crypto");

var fs = require("fs");

const algorithm = "aes-256-cbc";
const Securitykey = crypto.randomBytes(32);
const initVector = crypto.randomBytes(16);

fs.readFile("encrypted.txt", "utf-8", function (err, data) {
  if (err) throw err;
  console.log(data);

  const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);

  let decryptedData = decipher.update(data,"hex", "utf-8",);

  decryptedData += decipher.final("utf-8");

  console.log("Decrypted message: " + decryptedData);
});
