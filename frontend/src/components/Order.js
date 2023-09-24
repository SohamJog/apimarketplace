import React from 'react';
import XmtpHome from './XmtpHome';  // Importing the XmtpHome component, assuming it's in the same directory
import {SC_ADDRESS} from '../constants';
import APIKeyEscrow from '../contracts/APIKeyEscrow.json';
import { useAccount, useContractRead, useContractWrite } from 'wagmi';

const Order = ({id, name, duration, cost, publicAddress, costPerHour, isSeller, image, isUpForSale }) => {

  const { dataBuy, isLoadingBuy, isSuccessBuy, write: buyWrite } = useContractWrite({
    address: SC_ADDRESS,
    abi: APIKeyEscrow.abi,
    functionName: 'buyMessage',
  })

  const { data: cancelData, isLoading: cancelIsLoading, isSuccess: cancelIsSuccess, write: cancelWrite } = useContractWrite({
    address: SC_ADDRESS,
    abi: APIKeyEscrow.abi,
    functionName: 'cancelOrder',
  })

  function formatAddress(address) {
    if (!address) return ""; // handle null or undefined
    if (address.length <= 10) return address; // if address is too short, just return it
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }

  const handleBuy = async () => {
    console.log(cost)
    buyWrite({args: [Number(id)],
      value: cost,
    });
  }

  const handleCancel = async () => {
    console.log(id)
    cancelWrite({
      args: [Number(id)]
    });
  }

  return (
    <div className="border p-4 rounded-lg shadow-md bg-gradient-to-r from-blue-200 to-blue-300">
      <div className="flex justify-between items-center mb-4">
        {image && <img src={image} alt="Profile Image" className="rounded-full w-20 h-20" />}
        <div className="w-1/2 text-blue-800">
          <p className="font-bold">{name}</p>
          <p><span className="font-bold">Public Address:</span> {formatAddress(publicAddress)}</p>

        </div>
        {!isUpForSale && <button onClick={handleCancel} className="bg-red-400 text-white py-2 px-4 rounded">
          CANCEL Transaction
        </button>}
        {isUpForSale && <button onClick={handleBuy} className="bg-green-400 text-white py-2 px-4 rounded">
          BUY
        </button>}
      </div>
      <div className="flex justify-between items-start text-blue-800">
        
        <div>
          <p><span className="font-bold">Duration:</span> {duration}</p>
          {!isUpForSale && <p><span className="font-bold">Cost:</span> {isSeller ? `${cost} collected` : `${cost} spent`}</p>}
        </div>
        <div className="text-right">
          <p className="font-bold">{costPerHour} ETH/hour</p>
        </div>
      </div>
      {/* Display XmtpHome component if not up for sale */}
      {!isUpForSale && <XmtpHome PEER_ADDRESS={publicAddress} />}
    </div>
  );
}

export default Order;
