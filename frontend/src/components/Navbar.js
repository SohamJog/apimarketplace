import React from 'react'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Button, Web3Modal } from '@web3modal/react'
import { useAccount, configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

// const chains = [arbitrum, mainnet, polygon] // -----CHANGE-----
// const projectId = '02d2c608e74734322e276800f3e43483' // -----HIDE-----

// const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors: w3mConnectors({ projectId, chains }),
//   publicClient
// })
// const ethereumClient = new EthereumClient(wagmiConfig, chains)
// const apiUrl = "https://api.cloudnouns.com/v1/pfp";

function Navbar({wagmiConfig, ethereumClient, projectId, apiUrl}) {
  
  return (
    <>
      
      <div className="bg-gray-900 p-4 flex justify-between items-center">
      {/* Left Side */}
      <ul className="flex space-x-4 list-none">
        <li>
          <a href="/sell" className="text-white hover:text-gray-400 border rounded px-3 py-2">Sell</a>
        </li>
        <li>
          <a href="/buy" className="text-white hover:text-gray-400 border rounded px-3 py-2">Buy</a>
        </li>
      </ul>

      {/* Center (Wallet Connect) */}
      <div className="flex items-center justify-center">
        <WagmiConfig config={wagmiConfig}>
          <Web3Button />
        </WagmiConfig>
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </div>

      {/* Right Side */}
      <ul className="flex items-center space-x-2 list-none">
        <li>
          <img
            src={apiUrl}
            alt="Profile Picture"
            className="rounded-full w-20 h-20"
          />
        </li>
      </ul>
    </div>


    </>
    
  )
}

export default Navbar