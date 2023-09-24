import React from 'react'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Button, Web3Modal } from '@web3modal/react'
import { useAccount, configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'
import Profile from './Profile'

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
  const pixelFontStyle = {
    fontFamily: 'Public Pixel', // Use the font-family name defined in your CSS
  };
  return (
    <>
      
      <div className="p-4 flex justify-between items-center">
  {/* Left Side */}
  <ul className="flex space-x-4 list-none">
    <li>
      <a href="/" className="text-white hover:text-gray-400 border rounded px-3 py-2">LOGO</a>
    </li>
    <li>
      <a href="/buy" className="text-white hover:text-gray-400 border rounded px-3 py-2" style={pixelFontStyle}>Buy</a>
    </li> 
    <li>
      <a href="/sell" className="text-white hover:text-gray-400 border rounded px-3 py-2" style={pixelFontStyle}>Sell</a>
    </li>
  </ul>

  {/* Right Side */}
  <ul className="flex items-center space-x-2 list-none">
    {/* Move Wallet Connect here */}
    <li>
      <div className="flex items-center space-x-2">
        <WagmiConfig config={wagmiConfig}>
          <Web3Button />
        </WagmiConfig>
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </div>
    </li>
    
    {/* Profile Image */}
    <li>
      <Profile apiUrl={apiUrl} />
    </li>
  </ul>
</div>




    </>
    
  )
}

export default Navbar