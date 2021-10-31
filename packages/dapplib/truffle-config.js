require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note predict uncle grace basic equal gesture'; 
let testAccounts = [
"0x92e4ccb82c15d6cfbe0f72bca29ddd4f80e1fe0d2afff3a9911db8533765748c",
"0x6c5c3f70c82a03f514a43d1a948d3aeee2509f0915d7deb7de5225ae2d5ec203",
"0x6410f2068b3aa809ca5050f92ed2b5c0f2857649eca6a1378c8fbaebc1fc9474",
"0x6245b3b44dafbb25ca617af64e9ece7fc9e7bf72b861cc089e0c6b15384c6bdc",
"0x8c9ae3013d0c5826c7898469bc556f7f2c1f9e9e5a7344a97ce447a03a75e75f",
"0x789e1abd6b1237429308ef7740ede9aab213264f0e4ad0f8d9d3efb74e3d28b5",
"0x60dd70bf6b44894e35d2541963d18e13cbb8ee7a0c90884f938c9b572e5d7bb7",
"0xa186109a24e41ba79f98bf10e2af96dd56a60dcfd18b7180c29c45ff451ef0c3",
"0xf4e069a3f9bd8b0ba4a0d2d73d7ceb21be7b34412b784dff364f6d94e2cb333a",
"0x1e9952afa338afee3cd7b6b3ac01584b5850686493a749d1512d737c5ba3caf6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

