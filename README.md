# Smart Contract Deployment Project

## Overview

This project demonstrates the deployment of an Ethereum smart contract using Web3.js, Ganache, Truffle HDWallet Provider, and Infura. The smart contract is written in Solidity, compiled using solc, and deployed to the Sepolia Testnet.

## Prerequisites

Ensure you have the following installed on your system:

- Node.js (v18+ recommended)

- Ganache

- Infura Account (for Sepolia RPC connection)

- Metamask Wallet (for managing testnet accounts)

## Project Structure
```
smart-contract_demo/
├── contracts/
│   ├── Inbox.sol  # Solidity Smart Contract
├── test/
│   ├── Inbox.test.js  # Mocha Tests
├── deploy.js  # Deployment Script
├── compile.js  # Solidity Compilation Script
├── .env  # Environment Variables
├── package.json  # Dependencies
└── README.md  # Documentation
```

## Installation

- Clone the repository and install the dependencies:
```
npm install
```

- Dependencies

    The following npm packages are used:
```
{
  "dependencies": {
    "dotenv": "^16.4.7",
    "ganache": "^7.9.2",
    "mocha": "^11.1.0",
    "solc": "^0.4.17",
    "web3": "^4.16.0",
    "@truffle/hdwallet-provider": "^2.1.11"
  }
}
```

### Setting Up Environment Variables

Create a `.env` file in the root directory:

```
ACCOUNT_MNEMONIC="your metamask seed phrase"
INFURA_SEPOLIA_LINK="https://sepolia.infura.io/v3/YOUR_PROJECT_ID"
```

### Running the Tests

Use Mocha to test the contract:
```
npm test
```

### Deployment

Run the deployment script:
```
node deploy.js
```

Expected Output
```
Attempting to deploy from account 0x...
Contract deployed to 0x...
```

### Troubleshooting

- Ensure Metamask is connected to Sepolia Testnet.

- Verify your Infura Project ID is correctly set.

- Ensure you have sufficient Sepolia ETH for gas fees.

- Run npm install again if dependencies are missing.

## License

- This project is open-source and licensed under the MIT License.

