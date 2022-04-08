const main = async () => {
  const [owner, signer1, signer2] = await hre.ethers.getSigners();

  // We get the contract to deploy
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  const wavePortal = await waveContract.deployed();

  console.log("WavePortal deployed to:", wavePortal.address);
  console.log("WavePortal deployed by:", owner.address);

  await waveContract.getTotalWaves();

  const waveByOwner = await waveContract.wave();
  await waveByOwner.wait();
  await waveContract.getTotalWaves();

  const waveBySigner1 = await waveContract.connect(signer1).wave();
  await waveBySigner1.wait();
  await waveContract.getTotalWaves();

  const waveBySigner2 = await waveContract.connect(signer2).wave();
  await waveBySigner2.wait();
  await waveContract.getTotalWaves();
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
