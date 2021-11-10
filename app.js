// var crypto = require('crypto');
// var fs = require('fs');

// const algorithm = "aes-256-cbc"; 
// const Securitykey = crypto.randomBytes(32);
// const initVector = crypto.randomBytes(16);

// const arguments = process.argv.slice(2);
// const data = arguments.toString();
// console.log(data);

// var text = "";

// for(var i in arguments){
//     text = text.trim() + " " + arguments[i];
// }
// console.log(text);

// const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
// let encryptedData = cipher.update(text, "utf-8", "hex");
// encryptedData = cipher.final("hex");
// fs.writeFile('encrypted.txt',encryptedData, function (err){
//     if(err) throw err;
// })
// console.log("Encrypted message: " + encryptedData);


// //Decrypt
// fs.readFile('encrypted.txt','utf-8',(err,data1)=>{
//     if(err) throw err;
//     console.log(data1);
//     const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
//     let decryptedData = decipher.update(data1, "hex" , "utf-8");
//     decryptedData += decipher.final("utf-8");
//     console.log("Decrypted message: " + decryptedData);
// });

const Cryptr = require('cryptr');
var fs = require('fs');
const args = process.argv;

const cryptr = new Cryptr('myTotalySecretKey');
const encryptedString = cryptr.encrypt();

// fs.writeFileSync('encrypted.txt',encryptedString,function(err){
//     if (err) throw err;
//     // console.log(err);
// })

if (args[2] == 'add') {
      fs.writeFileSync(args[3], cryptr.encrypt(args[4]));
    }else if(args[2] == 'remove'){
        fs.unlinkSync(args[3]);
    }else{
        console.log("invalid arguments");
    }
    

console.log(encryptedString);
