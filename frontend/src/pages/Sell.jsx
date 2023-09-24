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
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold mt-24 mb-16">Help Decentralize the internet</h1>
        <p className="text-center">Sell your API accesss here. You don't have to share your API keys with us, just send your API key securely through XMTP once the transaction is finalized!</p>
    </div>

      <SellComponent />
    </>
  )
}

export default Sell