
const sample = {
  fetch: `const Web3 = require("web3")
  
// set a provider such as using infura
const web3 = new Web3("https://mainnet.infura.io/v3/endpoint") 

// Get the balance of an Ethereum address
web3.eth.getBalance("0x1b3cB81E51011b549d78bf720b0d924ac763A7C2").then(result => {
    console.log(result)
  }) // result: 560000000065000000000000

// Get the latest block number
 web3.eth.getBlockNumber().then(result => {
    console.log(result)
  }) // result: 13497160`,
  interact: `const Web3 = require("web3")

// set a provider in the ropsten testnet using infura
const web3 = new Web3("https://ropsten.infura.io/v3/endpoint") 

// interacting with the smart contract
const abi = [
{
 "inputs": [
  {
   "internalType": "uint256",
   "name": "newValue",
   "type": "uint256"}],
   "name": "setValue",
   "outputs": [],
   "stateMutability": "nonpayable",
   "type": "function" },
{
 "inputs": [
  {
   "internalType": "uint256",
   "name": "newValue",
   "type": "uint256"}],
   "name": "setValue",
   "outputs": [],
   "stateMutability": "nonpayable", "type": "function" },
]

const address = '0xe435e2a3cb5dc62c75d8bb2dba8470771405911d'

// create a new contract object, providing the ABI and address
const contract = new web3.eth.Contract(abi, address)

// using contract.methods to get value
contract.methods.value().call().then(result => {
  console.log(result)
})`,
simplify: `
const Web3 = require("web3")

// Create a sha3 hash of a string input
web3.utils.sha3("example") // '0x6fd43e7cffc31bb581d7421c8698e29aa2bd8e7186a394b85299908b4eb9b175'

// Convert any ether value into wei
 web3.utils.toWei('1', 'ether') // 1000000000000000000
 web3.utils.toWei('1', 'gwei') // 1000000000

// Adds a padding on the left of a string, useful for adding paddings to HEX strings.
web3.utils.padLeft('0x3456ff', 20); // '0x000000000000003456ff'
`,
}

export default sample;
