const sample = {
  interact: `const Web3 = require("web3");
    // set a provider in the ropsten testnet using infura
    const web3 = new Web3("https://ropsten.infura.io/v3/endpoint");

    // interacting with the smart contract
    const abi = [
      {
        outputs: [
          {
            internalType: "uint256",
            name: "newValue",
            type: "uint256",
          },
        ],
        name: "getValue",
        stateMutability: "nonpayable",
        type: "function",
      },
    ] as const;

    const address = "0xe435e2a3cb5dc62c75d8bb2dba8470771405911d";

    // create a new contract object, providing the ABI and address
    const contract = new web3.eth.Contract(abi, address);

    // using contract.methods to get value
    contract.methods
      .getValue()
      .call()
      .then(console.log);`,

  listen: `const Web3 = require("web3");
  
  // set a provider in the ropsten testnet using infura
  const web3 = new Web3("https://ropsten.infura.io/v3/endpoint");

  // interacting with the smart contract
  const abi = [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "newValue",
          type: "uint256",
        },
      ],
      name: "VALUE_CHANGE",
      type: "event",
    },
  ] as const;

  const address = "0xe435e2a3cb5dc62c75d8bb2dba8470771405911d";

  // create a new contract object, providing the ABI and address
  const contract = new web3.eth.Contract(abi, address);

// using contract.methods to get value
const subscription = await contract.events.VALUE_CHANGE();
subscription.on("data", console.log); // new value every time the event is emitted
`,
  fetch: `
const Web3 = require("web3")
  
// set a provider such as using infura
const web3 = new Web3("https://mainnet.infura.io/v3/endpoint") 

// Get the balance of an Ethereum address
web3.eth.getBalance("0x1b3cB81E51011b549d78bf720b0d924ac763A7C2").then(console.log) // result: BigInt(560000000065000000000000)

// Get the latest block number
 web3.eth.getBlockNumber().then(console.log) // result: BigInt(13497160)
`,
  simplify: `
const Web3 = require("web3")

// Create a sha3 hash of a string input
Web3.utils.sha3("example") // '0x6fd43e7cffc31bb581d7421c8698e29aa2bd8e7186a394b85299908b4eb9b175'

// Convert any ether value into wei
 Web3.utils.toWei('1', 'ether') // 1000000000000000000
 Web3.utils.toWei('1', 'gwei') // 1000000000

// Adds a padding on the left of a string, useful for adding paddings to HEX strings.
Web3.utils.padLeft('0x3456ff', 20); // '0x000000000000003456ff'
`,
};

export default sample;
