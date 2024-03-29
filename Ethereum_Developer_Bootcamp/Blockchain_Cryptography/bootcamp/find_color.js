/**
 * To take the hash of a color, 
 * first use utf8ToBytes to translate the string to bytes. 
 * Then, use sha256 to hash it.
*  When you want to compare two hashes, first use toHex to turn each hash from a Uint8Array to a string of hexadecimal characters.
 */
const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    for(let color of COLORS){
        if(toHex(sha256(utf8ToBytes(color))) == toHex(hash)){
            return color;
        }
    }
}

module.exports = findColor;