// To run this script, local eth network must be up by `yarn hardhat node`

const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  // We get the contract to deploy
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const wavePortal = await waveContractFactory.deploy();

  console.log("Account balance: ", accountBalance.toString());
  console.log("WavePortal deployed to: ", wavePortal.address);
  console.log("WavePortal deployed by: ", deployer.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
