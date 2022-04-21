const HDWalletProvider = require('@truffle/hdwallet-provider')
require('dotenv').config()
const fs = require('fs');
const mnemonic = fs.readFileSync(".env").toString().trim();
module.exports = {
  networks: {
    development: {
      provider: () => {
        return new HDWalletProvider(mnemonic,'http://localhost:8000')
      },
      network_id: '*',
      gas: 1750809638,
      networkCheckTimeout: 100000,
      pollingInterval: 16000
    },
    ropsten: {
      provider: () => {
        return new HDWalletProvider(mnemonic,  'https://pubnodestest.cypherium.io')
      },
      network_id: '*',
      gas: 1750809638,
      networkCheckTimeout: 100000,
      pollingInterval: 16000
    },

  },
  compilers: {
    solc: {
      version: "0.8.1",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ]
}
