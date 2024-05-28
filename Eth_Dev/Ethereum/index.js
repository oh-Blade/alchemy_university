// const { Alchemy, Network, Wallet, Utils } = require('alchemy-sdk');
// require('dotenv').config();

// const { TEST_API_KEY, TEST_PRIVATE_KEY } = process.env;

// console.log(TEST_PRIVATE_KEY);

// const settings = {
//   apiKey: TEST_API_KEY,
//   network: Network.ETH_SEPOLIA,
// };
// const alchemy = new Alchemy(settings);

// let wallet = new Wallet(TEST_PRIVATE_KEY);
// console.log(wallet.address);

// async function main() {
//   const nonce = await alchemy.core.getTransactionCount(
//     wallet.address,
//     'latest'
//   );
  
//   let transaction = {
//     to: '0x29eDB6E6a5098ea4c2e6D172b5CF86ca18AFD477',//choose any address!,
//     value: Utils.parseEther('0.0001'), // 0.001 worth of ETH being sent
//     gasLimit: '21000',
//     maxPriorityFeePerGas: Utils.parseUnits('5', 'gwei'),
//     maxFeePerGas: Utils.parseUnits('20', 'gwei'),
//     nonce: nonce,
//     type: 2,
//     chainId: 1, // göerli transaction
//   };

//   let rawTransaction = await wallet.signTransaction(transaction);
//   console.log('Raw tx: ', rawTransaction);
//   let tx = await alchemy.core.sendTransaction(rawTransaction);
//   console.log(`https://sepolia.etherscan.io/tx/${tx.hash}`);
// }

// main();


const TronWeb  = require("tronweb");

const tronWeb = new TronWeb({
  fullHost: 'https://api.trongrid.io',
  headers: { 'TRON-PRO-API-KEY': '3ee846f2-f6d5-4a42-9410-69d4f9aec74e' }
});
async function get(){
  const tx = await new TronWeb.Trx(tronWeb).getTransaction("0daa9f2507c4e79e39391ea165bb76ed018c4cd69d7da129edf9e95f0dae99e2");

console.log(tx.raw_data_hex);
}

get();
