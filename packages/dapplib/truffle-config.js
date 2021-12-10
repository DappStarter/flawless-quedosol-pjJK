require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remind concert grace casino system text'; 
let testAccounts = [
"0x7088f7d12cb48a33c0759ce6cca9328c64151263b8e3b85dddd58f426747ef9c",
"0x43e7311dbc7e349388a41a7a8868bf217df21291dabd3f02c88674f761beb6e7",
"0xc3b901b129c68544403a6fa3ad437ce5a9c05f6588d1cf8d9417d42511689b72",
"0xdf4465a47c2666384d8eee9cdec35cc9b1fe8e24e64b10a5aefd126e04560d11",
"0xf7312fdf0960e2bdde8d9fedfabc290f3adeb8e9acbaa648a420dfe0557353de",
"0x35bdfb9c7589e04f46cd7ebcbe270364ab802a2119a884cdfbd612c96568cac3",
"0x82632305ebed80e34708c35bf06ed25c8d6d315b6676c4418f609bcc342d411a",
"0x6bd82f4a61b2ccb986a8f3b53a66cdbb0df5054f6eaa6a6304c741e633589a8d",
"0x91376b014b2b79b9aab16482b79336951e7b6a6295c3f68fac02e2782be60658",
"0x824ef78c65965ffab1118f66531385f8a9130c0daaad10f644da20bcdbc6a2d6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


