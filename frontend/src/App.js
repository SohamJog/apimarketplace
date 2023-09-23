import React from "react";
import './index.css';
//import order from components
import Order from "./components/Order";

function App() {
  return (
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
          <h2 className="text-6xl font-semibold mb-4">Welcome to Ethny</h2>
          <p className="text-xl">Redefining the modern web experience.</p>
        </div>
      </header>
      <Order duration="3 hours" cost="$100" publicAddress="0x1234567890abcdef12345678" costPerHour="$33.33" />

    </div>
  );
}

export default App;
