import React from 'react'

function Sponsors() {
  const pixelFontStyle = {
    fontFamily: 'Public Pixel', // Use the font-family name defined in your CSS
  };
  return (
    <>
      <div className="mt-8">
      <h3 className="text-4xl font-semibold mb-6 text-center text-black" style={pixelFontStyle}>Our Integrations</h3>
      <div className="flex items-center justify-center space-x-8">
        {/* Sponsor 1 */}
        <div className="p-6 rounded-full bg-transparent overflow-hidden">
          <img src="/Assets/WalletConnect.png" alt="Sponsor 1" className="w-48 h-48 object-contain bg-transparent" />
        </div>

        {/* Sponsor 2 */}
        <div className="p-6 rounded-full bg-transparent overflow-hidden">
          <img src="/Assets/nounsdao.png" alt="Sponsor 2" className="w-48 h-48 object-contain bg-transparent" />
        </div>

        {/* Sponsor 3 */}
        <div className="p-6 rounded-full bg-transparent overflow-hidden">
          <img src="/Assets/thegraph.png" alt="Sponsor 3" className="w-48 h-48 object-contain bg-transparent" />
        </div>

        {/* Sponsor 4 */}
        <div className="p-6 rounded-full bg-transparent overflow-hidden">
          <img src="/Assets/Scroll.png" alt="Sponsor 4" className="w-48 h-48 object-contain bg-transparent" />
        </div>

        {/* Sponsor 5 */}
        <div className="p-6 rounded-full bg-transparent overflow-hidden">
          <img src="/Assets/xmtp.png" alt="Sponsor 4" className="w-48 h-48 object-contain bg-transparent" />
        </div>
      </div>
    </div>

    </>

  )
}

export default Sponsors

