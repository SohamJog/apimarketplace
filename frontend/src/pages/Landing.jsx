import React from 'react'
import Navbar from '../components/Navbar'
import FlickeringImage from '../components/FlickeringImage'
import Sponsors from '../components/Sponsors';
import Description from '../components/Description';

const apiUrl = "https://api.cloudnouns.com/v1/pfp";

function Landing() {
  const pixelFontStyle = {
    fontFamily: 'PixelFont', // Use the font-family name defined in your CSS
  };
  return (
    <>
      <div className="flex h-screen">
        {/* Left Side: Text and Buttons (2/3) */}
        <div className="w-2/3 p-4 flex flex-col items-center justify-center">
          <div className="mb-4">
            <h2 className="text-8xl font-semibold mb-4" style={pixelFontStyle}>Every API in One<br />MarketPlace</h2>
            <p className="text-xl" style={pixelFontStyle}>Redefining the modern web experience.</p>
            <div className="mb-4">
              <p className="text-xl" style={pixelFontStyle}>Redefining the modern web experience.</p>
              <div className="mt-4">
                <a href="/buy" className="text-black hover:text-black-400 border rounded px-4 py-2 mr-4" style={pixelFontStyle}>Buy</a>
                <a href="/sell" className="text-black hover:text-black-400 border rounded px-4 py-2" style={pixelFontStyle}>Sell</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Flickering Image (1/3) */}
        <div className="w-1/3 flex items-center justify-center ml-4">
          <div className="mt-8">
            <FlickeringImage imageUrl={apiUrl} />
          </div>
        </div>
      </div>
      <div>
        <Description />
        <Sponsors />
      </div>
    </>
   
  )
}

export default Landing