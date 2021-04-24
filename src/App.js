import logo from './logo.svg';
import './App.css';
import Web3 from "web3";

// const initialize = () => {

//   // window.ethereum.enable;
//   //Basic Actions Section
//   const onboardButton = document.getElementById('connectButton');
//   const getAccountsButton = document.getElementById('getAccounts');
//   const getAccountsResult = document.getElementById('getAccountsResult');



//   //Created check function to see if the MetaMask extension is installed
//   const isMetaMaskInstalled = () => {
//     //Have to check the ethereum binding on the window object to see if it's installed
//     const { ethereum } = window;
//     console.log(ethereum);
//     return Boolean(ethereum && ethereum.isMetaMask);
//   };

//   const onClickConnect = async () => {
//     try {
//       // Will open the MetaMask UI
//       // You should disable this button while the request is pending!
//       await ethereum.request({ method: 'eth_requestAccounts' });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const MetaMaskClientCheck = () => {
//     //Now we check to see if MetaMask is installed
//     if (!isMetaMaskInstalled()) {

//       console.log("Sorry")

//     } else {
//       console.log("hey");
//       onboardButton.innerText = 'Connect';
//       //When the button is clicked we call this function to connect the users MetaMask Wallet
//       onboardButton.onclick = onClickConnect;
//       //The button is now disabled
//       onboardButton.disabled = false;
//     }
//   };
//   MetaMaskClientCheck();
//   //------/Inserted Code------\\
//   //Eth_Accounts-getAccountsButton
//   getAccountsButton.addEventListener('click', async () => {
//     //we use eth_accounts because it returns a list of addresses owned by us.
//     const accounts = await ethereum.request({ method: 'eth_accounts' });
//     //We take the first address in the array of addresses and display it
//     getAccountsResult.innerHTML = accounts[0] || 'Not able to get accounts';

//     let tokenABI = [
//       {
//         "constant": true,
//         "inputs": [],
//         "name": "name",
//         "outputs": [
//           {
//             "name": "",
//             "type": "string"
//           }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//       },
//       {
//         "constant": false,
//         "inputs": [
//           {
//             "name": "_spender",
//             "type": "address"
//           },
//           {
//             "name": "_value",
//             "type": "uint256"
//           }
//         ],
//         "name": "approve",
//         "outputs": [
//           {
//             "name": "",
//             "type": "bool"
//           }
//         ],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//       },
//       {
//         "constant": true,
//         "inputs": [],
//         "name": "totalSupply",
//         "outputs": [
//           {
//             "name": "",
//             "type": "uint256"
//           }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//       },
//       {
//         "constant": false,
//         "inputs": [
//           {
//             "name": "_from",
//             "type": "address"
//           },
//           {
//             "name": "_to",
//             "type": "address"
//           },
//           {
//             "name": "_value",
//             "type": "uint256"
//           }
//         ],
//         "name": "transferFrom",
//         "outputs": [
//           {
//             "name": "",
//             "type": "bool"
//           }
//         ],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//       },
//       {
//         "constant": true,
//         "inputs": [],
//         "name": "decimals",
//         "outputs": [
//           {
//             "name": "",
//             "type": "uint8"
//           }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//       },
//       {
//         "constant": true,
//         "inputs": [
//           {
//             "name": "_owner",
//             "type": "address"
//           }
//         ],
//         "name": "balanceOf",
//         "outputs": [
//           {
//             "name": "balance",
//             "type": "uint256"
//           }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//       },
//       {
//         "constant": true,
//         "inputs": [],
//         "name": "symbol",
//         "outputs": [
//           {
//             "name": "",
//             "type": "string"
//           }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//       },
//       {
//         "constant": false,
//         "inputs": [
//           {
//             "name": "_to",
//             "type": "address"
//           },
//           {
//             "name": "_value",
//             "type": "uint256"
//           }
//         ],
//         "name": "transfer",
//         "outputs": [
//           {
//             "name": "",
//             "type": "bool"
//           }
//         ],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//       },
//       {
//         "constant": true,
//         "inputs": [
//           {
//             "name": "_owner",
//             "type": "address"
//           },
//           {
//             "name": "_spender",
//             "type": "address"
//           }
//         ],
//         "name": "allowance",
//         "outputs": [
//           {
//             "name": "",
//             "type": "uint256"
//           }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//       },
//       {
//         "payable": true,
//         "stateMutability": "payable",
//         "type": "fallback"
//       },
//       {
//         "anonymous": false,
//         "inputs": [
//           {
//             "indexed": true,
//             "name": "owner",
//             "type": "address"
//           },
//           {
//             "indexed": true,
//             "name": "spender",
//             "type": "address"
//           },
//           {
//             "indexed": false,
//             "name": "value",
//             "type": "uint256"
//           }
//         ],
//         "name": "Approval",
//         "type": "event"
//       },
//       {
//         "anonymous": false,
//         "inputs": [
//           {
//             "indexed": true,
//             "name": "from",
//             "type": "address"
//           },
//           {
//             "indexed": true,
//             "name": "to",
//             "type": "address"
//           },
//           {
//             "indexed": false,
//             "name": "value",
//             "type": "uint256"
//           }
//         ],
//         "name": "Transfer",
//         "type": "event"
//       }
//     ]
//     let tokenAddress = "0x0f5d2fb29fb7d3cfee444a200298f468908cc942"
//     let tokenInst = new web3.eth.Contract(tokenABI, tokenAddress);


//     tokenInst.methods.balanceOf(accounts).call().then(function (bal) {
//       console.log(bal);
//     })
//   });

// };
const web3=new Web3();

const nfts={
  "chiliZ":"0x3506424f91fd33084466f402d5d97f05f8e3b4af",
  "MANA":"0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
  "ENJ":"0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c",
  "OGN":"0x8207c1ffc5b6804f6024322ccf34f29c3541ae26"
}

export const connectWallet = async () => {
  if (window.ethereum) { //check if Metamask is installed
    try {
      const address = await window.ethereum.enable(); //connect Metamask
      const obj = {
        connectedStatus: true,
        status: "",
        address: address
      }
      return obj;

    } catch (error) {
      return {
        connectedStatus: false,
        status: "🦊 Connect to Metamask using the button on the top right."
      }
    }

  } else {
    return {
      connectedStatus: false,
      status: "🦊 You must install Metamask into your browser: https://metamask.io/download.html"
    }
  }
};
function App() {
  // initialize();
  connectWallet();
  let tokenABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }
  ]

  for(let key in nfts){
    let tokenAddress = nfts[key];
    let tokenInst =new web3.eth.Contract(tokenABI, tokenAddress);
    let accounts="0x4F1653432649E360E45f579767dB0736cA334Bd1";
    tokenInst.methods.balanceOf(accounts).call().then(function (bal) {
      if(bal>0){
        console.log(key+" "+bal);
      }
    })
  }
return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
        </a>
    </header>
  </div>
);
}

export default App;
