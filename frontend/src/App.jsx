import React from "react";
import './index.css';
import Landing from "./pages/Landing";
import { Route, Routes, BrowserRouter, Router} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Dashboard from "./pages/Dashboard";
import Graph from "./pages/Graph";

function App() {
  return (
    <BrowserRouter>
    
      <div className="bg-gradient-to-r from-gray-900 to-black h-screen text-white">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />
          <Route path = "/dashboard" element={<Dashboard/>}/>
          <Route path = "/graph" element={<Graph/>}/>
        </Routes>
      </div>
      </BrowserRouter>

  );
}

export default App;
