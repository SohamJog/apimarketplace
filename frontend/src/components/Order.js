import React from 'react';
import XmtpHome from './XmtpHome';  // Importing the XmtpHome component, assuming it's in the same directory

const Order = ({ name, duration, cost, publicAddress, costPerHour, isSeller, image, isUpForSale }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-gradient-to-r from-blue-200 to-blue-300">
      <div className="flex justify-between items-center mb-4">
        {image && <img src={image} alt="Profile Image" className="rounded-full w-20 h-20" />}
        <div className="w-1/2 text-blue-800">
          <p className="font-bold">{name}</p>
          <p><span className="font-bold">Public Address:</span> {publicAddress.slice(0, 6)}...{publicAddress.slice(-4)}</p>
        </div>
        {!isUpForSale && <button className="bg-red-400 text-white py-2 px-4 rounded">
          CANCEL Transaction
        </button>}
        {isUpForSale && <button className="bg-green-400 text-white py-2 px-4 rounded">
          BUY
        </button>}
      </div>
      <div className="flex justify-between items-start text-blue-800">
        
        <div>
          <p><span className="font-bold">Duration:</span> {duration}</p>
          {!isUpForSale && <p><span className="font-bold">Cost:</span> {isSeller ? `${cost} collected` : `${cost} spent`}</p>}
        </div>
        <div className="text-right">
          <p className="font-bold">{costPerHour} cost/hour</p>
        </div>
      </div>
      {/* Display XmtpHome component if not up for sale */}
      {!isUpForSale && <XmtpHome PEER_ADDRESS={publicAddress} />}
    </div>
  );
}

export default Order;
