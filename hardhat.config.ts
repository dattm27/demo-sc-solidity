import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import "hardhat-deploy";
import "hardhat-deploy-ethers";
import * as dotenv from "dotenv";
dotenv.config();

const private_key = process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [];
const api_key = process.env.API_KEY !== undefined ? process.env.API_KEY : "";

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  defaultNetwork: "hardhat",
  namedAccounts: {
    deployer: {
      default: 0,
    },
    dev: {
      // Default to 1
      default: 1,
      // dev address mainnet
      // 1: "",
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    my_polygon: {
      url: process.env.RPC, //"https://api.avax-test.network/ext/bc/C/rpc",
      accounts: private_key
    }
  },
  etherscan: {
    apiKey: {
      polygonAmoy: api_key,
    }
  }
};

export default config;
