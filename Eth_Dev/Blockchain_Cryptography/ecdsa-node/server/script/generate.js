// const secp = require("ethereum-cryptography/secp256k1");
// const {toHex} = require("ethereum-cryptography/utils");

// function getPrivateKey () {
//   const privateKey = secp.utils.randomPrivateKey();
//   return toHex(privateKey);
// };
// const private_key = getPrivateKey();
// console.log('private key: ',private_key);

// function getPublicKey (privateKey) {
//   const publicKey = secp.getPublicKey(privateKey);
//   return toHex(publicKey);
// };
// console.log('public key: ',getPublicKey(private_key));

const EC = require('elliptic').ec;
const keccak256 = require('keccak');

const ec = new EC('secp256k1');
const key = ec.genKeyPair();

const privateKey = key.getPrivate('hex');
const publicKey = key.getPublic(false, 'hex').slice(2); // 去掉 0x04 前缀

// 以太坊地址 = keccak256(publicKey) 的最后 40 位
const address = keccak256('keccak256').update(Buffer.from(publicKey, 'hex')).digest('hex').slice(-40);

console.log('Private Key:', privateKey);
console.log('Public Key:', publicKey);
console.log('Wallet Address: 0x' + address);
