const dotenv = require("dotenv");
dotenv.config();
const { SEPOLIA_PRIVATE_KEY } = process.env;

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://sepolia-rpc.scroll.io/` || "",
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};