document.getElementById("connecttometamask").onclick = connectMetaMask;
document.getElementById("sendButton").onclick = sendTransaction;
document.getElementById("createTradeButton").onclick=createTrade;
var { Web3 } = require("web3");
const address = '0x2f611E2446bF967BE98f9d7e4eB6A5EdDD693830'
const abi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "buyer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "TokensPurchased",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "seller",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "TokensRedeemed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tradeId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "buyer",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "seller",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "TradeCompleted",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "NEA",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "buyTokens",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "seller",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "createTrade",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "redeemTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "token",
      "outputs": [
        {
          "internalType": "contract WasteKonToken",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tradeCounter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "trades",
      "outputs": [
        {
          "internalType": "address",
          "name": "buyer",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "seller",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "completed",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdrawEther",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
var contract = new web3.eth.Contract(abi, address);
var accounts;
var web3;


async function connectMetaMask() {
  if (window.ethereum) {
    try {
      // Request account access if needed
      accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      // We now have the user's accounts
      console.log("Connected accounts:", accounts);

      // Initialize Web3
      web3 = new Web3(window.ethereum);

      // Enable the send transaction button
      document.getElementById("sendButton").disabled = false;
    } catch (error) {
      console.error("User denied account access or error:", error);
    }
  } else {
    console.error("MetaMask is not installed.");
  }
}

// async function sendTransaction() {
//   const recipientAddress = "0xRecipientAddress"; // Replace with the recipient's address
//   const amountInEther = "0.1"; // Amount to send in Ether

//   try {
//     const tx = {
//       from: accounts[0], // Use the first account from MetaMask
//       to: recipientAddress,
//       value: web3.utils.toWei(amountInEther, "ether"),
//       gas: 2000000,
//     };

//     // Send the transaction and get the transaction hash
//     const txHash = await web3.eth.sendTransaction(tx);
//     console.log("Transaction hash:", txHash);
//   } catch (error) {
//     console.error("Error sending transaction:", error);
//   }
// }

async function buyTokens(){
    contract.methods.buyTokens(amountInEther).call(()=> { console.log('token bought')});
}

async function createTrade(){
    contract.methods.createTrade(sellerAddress, amount).call(()=> { console.log('trade created')});
}

// async completeTrade(){
//     contract.methods.completeTrade(amountInEther).call(()=> { console.log(token bought)});
// }

async function redeemTokens(){
    contract.methods.redeemTokens(amount).call(()=> { console.log('token bought')});
}

