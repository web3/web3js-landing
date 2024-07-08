const sample = {
  interact: `
  import {Web3} from "web3";

  // set a provider in the sepolia testnet using node rpc url
  const web3 = new Web3("https://rpc.sepolia.org");
  
  // interacting with the smart contract
  const abi = [
      {
      outputs: [
          {
          internalType: "uint256",
          name: "randomNo",
          type: "uint256",
          },
      ],
      name: "generateRandomNumber",
      stateMutability: "nonpayable",
      type: "function",
      },
  ] as const;
  
  const address = "0xA36432F7B12f160F685717c4Ab12EB883a682810";
  
  // create a new contract object, providing the ABI and address
  const contract = new web3.eth.Contract(abi, address);
  
  // using contract.methods to get value
  contract.methods
      .generateRandomNumber()
      .call()
      .then(console.log);`,

  listen: `
  import {Web3} from "web3";
  
  // set a provider to the sepolia testner using node rpc url
  const web3 = new Web3("wss://sepolia.infura.io/ws/v3/API_KEY");

  // interacting with the smart contract
  const abi = [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "randomNo",
          type: "uint256",
        },
      ],
      name: "RandomNo",
      type: "event",
    },
  ] as const;

  const address = "0xA36432F7B12f160F685717c4Ab12EB883a682810";

  // create a new contract object, providing the ABI and address
  const contract = new web3.eth.Contract(abi, address);

// using contract.methods to get value
const subscription = contract.events.RandomNo()
subscription.on("data", console.log); // new value every time the event is emitted
`,
  fetch: `
  import {Web3} from "web3"
  
  // set a provider such as using infura
  const web3 = new Web3("https://rpc.sepolia.org") 
  
  // Get the balance of an Ethereum address
  web3.eth.getBalance("0xF8561Dc64E577B0CF53dd3FC11329e80B1A8343e").then(console.log) // result: 1.000.000 eth
  
  // Get the latest block number
   web3.eth.getBlockNumber().then(console.log) // result: BigInt(xxx)
`,
  simplify: `
  import {Web3} from "web3";

  // Create a sha3 hash of a string input
  console.log(Web3.utils.sha3("example")) // '0x6fd43e7cffc31bb581d7421c8698e29aa2bd8e7186a394b85299908b4eb9b175'
  
  // Convert any ether value into wei
  console.log(Web3.utils.toWei('1', 'ether')) // 1000000000000000000
  console.log(Web3.utils.toWei('1', 'gwei')) // 1000000000
  
  // Adds a padding on the left of a string, useful for adding paddings to HEX strings.
  console.log(Web3.utils.padLeft('0x3456ff', 20)); // '0x000000000000003456ff'
`,
};

export default sample;
