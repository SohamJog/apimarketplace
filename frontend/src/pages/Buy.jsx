import React from 'react'
import { useAccount } from 'wagmi'
import WalletNotConnected from '../components/WalletNotConnected'
import BuyComponent from '../components/BuyComponent'


function Buy() {
  const { address, isConnecting, isDisconnected } = useAccount()

  if (isDisconnected || isConnecting) return (<div><WalletNotConnected/></div>)

  return (

    <BuyComponent />
  )
}

export default Buy