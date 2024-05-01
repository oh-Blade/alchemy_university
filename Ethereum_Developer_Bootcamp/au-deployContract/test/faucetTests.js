import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import {expect} from 'chai';

describe('Faucet', function () {
  async function deployContractAndSetVariables() {
    const Faucet = await ethers.getContractFactory('Faucet');
    const faucet = await Faucet.deploy();

    const [owner] = await ethers.getSigners();

    console.log('Signer 1 address: ', owner.address);
    return { faucet, owner };
  }

  it('should deploy and set the owner correctly', async function () {
    const { faucet, owner } = await loadFixture(deployContractAndSetVariables);

    expect(await faucet.owner()).to.equal(owner.address);
  });

  it('should allow the owner to withdraw funds', async function () {
    const { faucet, owner ,anyVariable} = await loadFixture(deployContractAndSetVariables);

    await faucet.withdraw();

    expect(await faucet.owner()).to.equal(owner.address);
  });
});
