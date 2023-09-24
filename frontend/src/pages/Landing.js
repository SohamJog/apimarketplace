import React from 'react'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import FlickeringImage from '../components/FlickeringImage';
import Sponsors from '../components/Sponsors';

const apiUrl = "https://api.cloudnouns.com/v1/pfp";

function Landing() {
  return (
    <>
      <div className="flex h-screen">
  {/* Left Side: Text and Buttons (2/3) */}
  <div className="w-2/3 p-4 flex flex-col items-center justify-center">
    <div className="mb-4">
      <h2 className="text-8xl font-semibold mb-4">Every API in One<br />MarketPlace</h2>
      <p className="text-xl">Redefining the modern web experience.</p>
      <div className="mb-4">
        <p className="text-xl">Redefining the modern web experience.</p>
        <div className="mt-4">
          <a href="/buy" className="text-white hover:text-gray-400 border rounded px-4 py-2 mr-4">Buy</a>
          <a href="/sell" className="text-white hover:text-gray-400 border rounded px-4 py-2">Sell</a>
        </div>
      </div>
    </div>
  </div>

  {/* Right Side: Flickering Image (1/3) */}
  <div className="w-1/3 flex items-center justify-center ml-200">
    <div className="mt-8">
      <FlickeringImage imageUrl={apiUrl} />
    </div>
  </div>
</div>







      {/* Project Description */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">About Our Project</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Box 1 */}
          <div className="border p-4 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-2">Box 1</h4>
            <p className="text-lg leading-relaxed">Text for Box 1 goes here.</p>
          </div>

          {/* Box 2 */}
          <div className="border p-4 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-2">Box 2</h4>
            <p className="text-lg leading-relaxed">Text for Box 2 goes here.</p>
          </div>

          {/* Box 3 */}
          <div className="border p-4 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-2">Box 3</h4>
            <p className="text-lg leading-relaxed">Text for Box 3 goes here.</p>
          </div>
        </div>
      </div>

      <div>
        <Sponsors />
      </div>
      
    </>
   
  )
}

export default Landing