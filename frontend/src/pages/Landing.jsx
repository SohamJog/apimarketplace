import React from 'react'
import Navbar from '../components/Navbar'
import FlickeringImage from '../components/FlickeringImage'
import Sponsors from '../components/Sponsors';
import Description from '../components/Description';

const apiUrl = "https://api.cloudnouns.com/v1/pfp";

function Landing() {
  const pixelFontStyle = {
    fontFamily: 'Public Pixel', // Use the font-family name defined in your CSS
  };
  return (
    <>
      <div className="flex h-screen">
        {/* Left Side: Text and Buttons (2/3) */}
        <div className="w-2/3 p-4 ml-16 flex flex-col items-center justify-center">
          <div className="mb-4">
            <h2 className="text-5xl text-black font-semibold mb-4" style={pixelFontStyle}>Enabling Crypto Payments for <br/> Web2 APIs</h2>
            <p className="text-md text-black" style={pixelFontStyle}>Redefining the modern API experience.</p>
            <div className="mb-4">
              <div className="mt-10">
              <a
  href="/buy"
  className="inline-block bg-black border border-black text-white text-2xl px-4 py-2 mr-4 rounded-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
  style={{ ...pixelFontStyle, marginLeft: 'auto' }}
>
  BUY
</a>
<a
  href="/sell"
  className="inline-block bg-black border border-black text-white text-2xl px-4 py-2 rounded-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
  style={{ ...pixelFontStyle }}
>
  SELL
</a>

              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Flickering Image (1/3) */}
        <div className="w-1/3 flex items-center justify-center ml-4">
          <div className="mt-8">
            {/* <FlickeringImage imageUrl={apiUrl} /> */}
          </div>
        </div>
      </div>

      <div className="container mx-auto p-1">
        <div className="grid grid-cols-2 gap-8">
          {/* Left column with a negative top margin to push it up */}
          <div className="col-span-1 -mt-20">
            <Description />
          </div>

          {/* Right column with flip effect */}
    <div className="col-span-1 relative transform scale-x-[-1]">
      <Description />
    </div>
  </div>

        <div className="mt-60">
          <Sponsors />
        </div>
      </div>


    </>
   
  )
}

export default Landing