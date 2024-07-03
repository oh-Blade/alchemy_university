const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();

  const contract = await hre.ethers.deployContract("Box");
  //const contract = await contractFactory.deploy();
  //await contract.deployed();
  console.log("合约部署到如下地址：", await contract.getAddress());
  console.log("合约部署人：", owner.address);

  let txn;
  let value = 42;

  txn = await contract.store(value);
  await txn.wait();

  value = await contract.retrieve();
  console.log("合约内存储的值是：", value);

};

const runMain = async () => {
  try{
      await main();
      process.exit(0);
  }catch(error){
      console.log(error);
      process.exit(1);
  }
};

runMain();
