import React, { useEffect } from 'react'
import SellComponent from '../components/SellComponent'
import { useAccount } from 'wagmi'
import WalletNotConnected from '../components/WalletNotConnected'



function Sell() {
  const { address, isConnecting, isDisconnected } = useAccount()

  useEffect(() => {
    if (!isDisconnected && !isConnecting) {
      console.log(address);
    }
  }, [address, isDisconnected, isConnecting]); // React will re-run the effect if address, isDisconnected, or isConnecting change.

 if (isDisconnected || isConnecting) return (<div><WalletNotConnected/></div>)


  return (

    <SellComponent />
  )
}

export default Sell