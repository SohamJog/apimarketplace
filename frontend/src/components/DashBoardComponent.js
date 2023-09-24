/*
Your current transactions:
Seller:
List of items:{public address of buyer, image, duration, and money collected, button with CANCEL transaction} 

Buyer:
List of itemsl {public address of seller, image, duration, and money spent, button with CANCEL transaction}
*/

// Compare this snippet from frontend/src/components/Orders.js:



import React from 'react';
import Order from '../components/Order'; // Assuming the Order component is in the same directory
import WalletNotConnected from '../components/WalletNotConnected'
import ethers from 'ethers'
import { useAccount, useContractRead, useContractWrite, useContractReads } from 'wagmi';
import {SC_ADDRESS} from '../constants';
import APIKeyEscrow from '../contracts/APIKeyEscrow.json';
import { useEffect, useState } from 'react';

const DashboardComponent = ({numberOfOrders}) => {
  const { address, isConnecting, isDisconnected } = useAccount()
  
  
  const { data, isError, isLoading } = useContractReads({
    contracts: Array.from({ length: numberOfOrders }, (_, i) => ({
        address: SC_ADDRESS,
        abi: APIKeyEscrow.abi,
        functionName: 'getOrder',
        args: [i]
    }))
});
  const [apiDataSold, setApiDataSold] = useState([]);
  const [apiDataBought, setApiDataBought] = useState([]);

  useEffect(() => {
    console.log(data);
    setApiDataBought([]);
    setApiDataSold([]);

    for (let i = 0; i < data.length; i++) {
      if (data[i].result.price == 0 || Number(data[i].result.buyer) != address) {
        //console.log("Nah..." + data[i].result.buyer.toString() + " " + address.toString())
        continue;
      }
      let api = {
        name: "OpenAI API",
        id: i,
        duration: Number(data[i].result.duration),
        cost: Number(data[i].result.price),
        publicAddress: data[i].result.seller,
        costPerHour: Number(data[i].result.price)/(Number(data[i].result.duration) ),
        isSeller: 0,
        image: 'https://api.cloudnouns.com/v1/pfp',
        isUpForSale: true,
      }
      setApiDataBought(apiDataBought => [...apiDataBought, api])
    }
    //console.log(apiDataBought)


    for (let i = 0; i < data.length; i++) {
      if (data[i].result.price == 0 || Number(data[i].result.seller) != address || data[i].result.buyer == '0x0000000000000000000000000000000000000000') {
        //console.log("Nah..." + data[i].result.buyer.toString() + " " + address.toString())
        continue;
      }
      let api = {
        name: "OpenAI API",
        id: i,
        duration: Number(data[i].result.duration),
        cost: Number(data[i].result.price),
        publicAddress: data[i].result.seller,
        costPerHour: Number(data[i].result.price)/(Number(data[i].result.duration) ),
        isSeller: 0,
        image: 'https://api.cloudnouns.com/v1/pfp',
        isUpForSale: true,
      }
      setApiDataSold(apiDataSold => [...apiDataSold, api])
    }
    //console.log(apiDataSold)
  }, []);


    // Sample data
  const itemsBeingSold = [
    {
      name: "OpenAI API",
      duration: "2 hours",
      cost: "100 ETH",
      publicAddress: "0x6e6D45D28eF482CC32aF178FeFD4a9eCD55b0eEc",
      costPerHour: "50 ETH",
      isSeller: true,
      image: "https://path-to-seller-image1.jpg"
    },
    {
      name: "GPT-3 API",
      duration: "1 hour",
      cost: "50 ETH",
      publicAddress: "0xMnOp1234567890QrStUv",
      costPerHour: "50 ETH",
      isSeller: true,
      image: "https://path-to-seller-image2.jpg"
    }
  ];

  const itemsBeingBought = [
    {
      name: "Something else",
      duration: "3 hours",
      cost: "150 ETH",
      publicAddress: "0xZyX9876543210WvUtSr",
      costPerHour: "50 ETH",
      isSeller: false,
      image: "https://path-to-buyer-image1.jpg"
    },
    {
      name: "Another thing",
      duration: "4 hours",
      cost: "200 ETH",
      publicAddress: "0xLmNo9876543210AbCdEf",
      costPerHour: "50 ETH",
      isSeller: false,
      image: "https://path-to-buyer-image2.jpg"
    }
  ];

  if (isDisconnected || isConnecting) return (<div><WalletNotConnected/></div>)

  return (
<div>
  <div className="flex flex-col justify-center items-center">
    <h1 className="text-6xl font-bold mt-24 mb-16">Dashboard</h1>
    <p className="text-center text-2xl mb-10">Here's a list of all your current transactions!</p>
  </div>

  <div className="mt-8">
    <h3 className="text-2xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">Items being sold:</h3>
    {apiDataSold.length === 0 ? (
      <p className="text-xl text-gray-600 italic">Looks like you have no sell transactions currently running.</p>
    ) : (
      apiDataSold.map((item, index) => (
        <Order 
          id = {item.id}
          key={index}
          name = {item.name}
          duration={item.duration}
          cost={item.cost}
          publicAddress={item.publicAddress}
          costPerHour={item.costPerHour}
          isSeller={item.isSeller}
          image={item.image}
        />
      ))
    )}
  </div>

  <div className="mt-12">
    <h3 className="text-2xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">Items being bought:</h3>
    {apiDataBought.length === 0 ? (
      <p className="text-xl text-gray-600 italic">Looks like you have no buy transactions currently running.</p>
    ) : (
      apiDataBought.map((item, index) => (
        <Order 
          id = {item.id}
          key={index}
          name = {item.name}
          duration={item.duration}
          cost={item.cost}
          publicAddress={item.publicAddress}
          costPerHour={item.costPerHour}
          isSeller={item.isSeller}
          image={item.image}
        />
      ))
    )}
  </div>
</div>


  );
}

export default DashboardComponent;
