# ArtDeco-NFT


## Quickstart

Right now this repo only works with ropsten. Run the following.
### Create one account
Your can creat one account with MetaMask wallet,and back up your MNEMONIC.
### Clone this repository
git clone https://github.com/cypherium/ArtDeco-NFT.git
cd ArtDeco-NFT
### Setup Environment Variables
You'll need a `MNEMONIC`  environment variable. Your `MNEMONIC` is your seed phrase of your wallet. Then, you can create a `.env` file with the following.

```bash
'cat dog frog....'
```

### Deploy
```bash
npm i
truffle migrate --reset --network ropsten
```

