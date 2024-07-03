const { ethers, upgrades } = require('hardhat');

async function main () {
  /**
   * 第一次部署
   */
  // const Box = await hre.ethers.getContractFactory('Box');
  // console.log('Deploying Box...');
  // const proxy = await upgrades.deployProxy(Box, [42], { initializer: 'store' });
  // // await proxy.deployed();
  // const implementationAddress = await upgrades.erc1967.getImplementationAddress(
  //   proxy.address
  // );
  // console.log('Proxy contract address: ' + proxy.address);
  // console.log('Implementation contract address: ' + implementationAddress);
  // console.log('Box deployed to:', await proxy.getAddress());

  /* 
   * 升级
   */
  const proxyAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';
  const BoxV2 = await ethers.getContractFactory('BoxV2');
  console.log('Upgrading Box...');
  await upgrades.upgradeProxy(proxyAddress, BoxV2);
  console.log('Box upgraded');
}

main();
