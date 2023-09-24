import React from 'react';

const WalletNotConnected = () => {
  const pixelFontStyle = {
    fontFamily: 'PixelFont', // Use the font-family name defined in your CSS
  };
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="p-6 rounded-lg bg-transparent shadow-xl">
        <h2 className="text-2xl font-semibold mb-4 text-black" style={pixelFontStyle}>Connect Your Wallet</h2>
        <p className="text-black" style={pixelFontStyle}>To access the features of this platform, please connect your cryptocurrency wallet.</p>
      </div>
    </div>
  );
}

export default WalletNotConnected;
