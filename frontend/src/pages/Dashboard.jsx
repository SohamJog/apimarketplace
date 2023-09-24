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
import DashboardComponent from '../components/DashBoardComponent';

const Dashboard = () => {
  const { address, isConnecting, isDisconnected } = useAccount()
  
  const { data, isError, isLoading } = useContractRead({
    address: SC_ADDRESS,
    abi:  APIKeyEscrow.abi,
    functionName: 'getOrderNextNumber',
  })


  if (isDisconnected || isConnecting) return (<div><WalletNotConnected/></div>)

  return (
    <div>
      <DashboardComponent
      numberOfOrders={Number(data)}
      />
    </div>
  );
}

export default Dashboard;
