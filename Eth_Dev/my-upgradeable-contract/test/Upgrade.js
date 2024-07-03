const { ethers, upgrades } = require('hardhat');

async function main () {
  /**
   * 第一次部署
   */
  // const Box = await hre.ethers.getContractFactory('Box');
  // console.log('Deploying Box...');
  // const box = await upgrades.deployProxy(Box, [42], { initializer: 'store' });
  // // await box.deployed();
  // console.log('Box deployed to:', await box.getAddress());

  /* 
   * 升级
   */
  const BoxV2 = await ethers.getContractFactory('BoxV2');
  console.log('Upgrading Box...');
  await upgrades.upgradeProxy('0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512', BoxV2);
  console.log('Box upgraded');
}

main();
