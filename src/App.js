import "./App.css";
import React, { useState } from "react";
import { ContractABI, ContractAddress } from "./utils/contractDetails";
const ethers = require("ethers");
const { ethereum } = window;

function App() {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [myData, setMyData] = useState(null);
  const [myNumber, setMyNumber] = useState();

  const ConnectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Please install metamask");
        return;
      } else {
        //add code here
        const accounts = ""
        setCurrentAccount(accounts[0]);
        console.log("Connected", currentAccount);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getEthereumContract = () => {
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const transactionContract = new ethers.Contract(
        ContractAddress,
        ContractABI,
        signer
      );
      return transactionContract;
    }
  };

  const getData = async () => {
    try {      
      const transactionContract = getEthereumContract();
      // add code
      const val = ""
      setMyData(val.toString());      
    } catch (error) {
      console.log(error);
    }
  };

  const setData = async () => {
    try {      
      const transactionContract = getEthereumContract();
      // add code
      const val = ""
      alert("Transaction Submitted, please wait for confirmation popup");
      await val.wait()
      console.log(val);
      window.confirm("Transaction Confirmed, press Get Data to see the updated value");      
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1> Get / Set Contract Interaction</h1>
        {currentAccount === null ? (
          <button onClick={ConnectWallet}>Connect Wallet</button>
        ) : (
          currentAccount
        )}
        <br />
        <br />
        <input type="number" placeholder="Enter a number" onChange={(e)=>(setMyNumber(e.target.value))} />
        <button onClick={setData}>Set Data</button>
        <br />
        <br />
        <button onClick={getData}>Get Data</button>
        {myData!==null ? <h3> Data is: {myData} </h3> : undefined}
      </header>
    </div>
  );
}

export default App;
