import React from 'react'
import SellComponent from '../components/SellComponent'
import { useAccount } from 'wagmi'
import WalletNotConnected from '../components/WalletNotConnected'




function Sell() {
  const { address, isConnecting, isDisconnected } = useAccount()


 if (isDisconnected || isConnecting) return (<div><WalletNotConnected/></div>)

  return (

    <SellComponent />
  )
}

export default Sell