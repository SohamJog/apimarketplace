import React from "react";
import './index.css';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Button, Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

const chains = [arbitrum, mainnet, polygon] // -----CHANGE-----
const projectId = '02d2c608e74734322e276800f3e43483'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)
const apiUrl = "https://api.cloudnouns.com/v1/pfp";

function App() {
  return (
    <>
      
      <div>
        {/* Display the fetched image */}
        
          <img
            src={apiUrl}
            alt="Profile Picture"
            className="rounded-full w-20 h-20"
          />
        
      </div>
      <div className="bg-gradient-to-r from-gray-900 to-black h-screen text-white">
        <nav className="p-5 bg-transparent">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold">Ethny</h1>
            <ul className="flex space-x-4">
              <li><a href="#home" className="hover:text-gray-400">Home</a></li>
              <li><a href="#about" className="hover:text-gray-400">About</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
        </nav>
        <header className="flex items-center justify-center h-screen">
          <div className="text-center">
            <WagmiConfig config={wagmiConfig}>
              <Web3Button />
            </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
            <h2 className="text-6xl font-semibold mb-4">Welcome to Ethny</h2>
            <p className="text-xl">Redefining the modern web experience.</p>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
