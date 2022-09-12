const { ethers } = require("hardhat")

const deploy = async () => {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying constract with the account: ", deployer.address);

  const PaloPunks = await ethers.getContractFactory("PaloPunks");
  const deployed = await PaloPunks.deploy();

  console.log("Palo Punks is deployend at: ", deployed.address );
};

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
