import React from "react";
import './index.css';
import Landing from "./pages/Landing";
import { Route, Routes, BrowserRouter, Router} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Dashboard from "./pages/Dashboard";
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Button, Web3Modal } from '@web3modal/react'
import { scrollSepolia} from 'wagmi/chains'
import XmtpHome from "./components/XmtpHome";
import { DynamicWidget, useDynamicContext, DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum-all";
import 'react-toastify/dist/ReactToastify.css';



const chains = [scrollSepolia] // -----CHANGE-----
const projectId = '02d2c608e74734322e276800f3e43483' // -----HIDE-----

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
    <BrowserRouter>
      <div className="bg-gradient-to-r from-gray-900 to-black min-h-screen text-white">
        <Navbar
         wagmiConfig={wagmiConfig}
          ethereumClient={ethereumClient}
          projectId={projectId}
          apiUrl={apiUrl}
        />
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/buy" element={<Buy />} /> */}


          <Route path="/sell" element={
            <WagmiConfig config={wagmiConfig}>
                <Sell/>
            </WagmiConfig>
          }/>
          <Route path="/buy" element={
            <WagmiConfig config={wagmiConfig}>
                <Buy/>
            </WagmiConfig>
          }/>


          <Route path = "/dashboard" element={             
          <WagmiConfig config={wagmiConfig}>
            <Dashboard
            
            />
          </WagmiConfig>}/>



          <Route path = "/xmtp" element={
             <WagmiConfig config={wagmiConfig}>
            
             <XmtpHome/>
           </WagmiConfig>
          }/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
