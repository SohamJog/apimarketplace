import React from 'react'
import { useAccount, useContractRead } from 'wagmi'
import WalletNotConnected from '../components/WalletNotConnected'
import BuyComponent from '../components/BuyComponent'
import {SC_ADDRESS} from '../constants';
import APIKeyEscrow from '../contracts/APIKeyEscrow.json';

function Buy() {
  const { data, isError, isLoading } = useContractRead({
    address: SC_ADDRESS,
    abi:  APIKeyEscrow.abi,
    functionName: 'getOrderNextNumber',
  })
  const { address, isConnecting, isDisconnected } = useAccount()

  if (isDisconnected || isConnecting) return (<div><WalletNotConnected/></div>)

  return (

    <BuyComponent
     numberOfOrders={Number(data)}
     />
  )
}

export default Buy