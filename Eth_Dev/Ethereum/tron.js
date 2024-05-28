const TronWeb  = require("tronweb");
const functionABI =  
{
  "constant": false,
  "outputs": [
    {
      "name": "_to",
      "type": "address"
    },
    {
      "name": "_value",
      "type": "uint256"
    }
  ],
  "name": "transfer",
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
};

const tronWeb = new TronWeb({
  fullHost: 'https://api.trongrid.io',
  headers: { 'TRON-PRO-API-KEY': '3ee846f2-f6d5-4a42-9410-69d4f9aec74e' }
});
async function get(){
  const data = '0x0000000000000000000000006add2326c22cb471041f772ef96a37ff7f4423af00000000000000000000000000000000000000000000000000000000ee6b2800';
  
  const u1 = tronWeb.utils.abi.decodeParamsV2ByABI(functionABI, data);
  console.log('us:'+u1);
  // const u2= TronWeb.hexStringToTronBytes(data);
  // console.log(u2);

//   const tx = await new TronWeb.Trx(tronWeb).getTransaction("0daa9f2507c4e79e39391ea165bb76ed018c4cd69d7da129edf9e95f0dae99e2");

// console.log(tx.raw_data_hex);
}

get();

// curl --request POST \
//      --url https://api.trongrid.io/walletsolidity/gettransactionbyid \
//      --header 'accept: application/json' \
//      --header 'content-type: application/json' \
//      --data '
// {
//   "value": "358d356e82ac73eaeffe8133158d8a6e5dab1c732ad44f9fc9794790c6268100"
// }
// '