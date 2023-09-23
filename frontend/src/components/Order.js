import React from 'react';

const Order = ({ duration, cost, publicAddress, costPerHour, isSeller }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-black">
      <div className="flex justify-between items-center mb-4">
        <div className="w-3/4 bg-gray-200 rounded-full">
          {/* Placeholder for image */}
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <p><span className="font-bold">Duration:</span> {duration}</p>
          <p><span className="font-bold">Cost:</span> {cost}</p>
          <p><span className="font-bold">Public Address:</span> {publicAddress.slice(0, 6)}...{publicAddress.slice(-4)}</p>
        </div>
        <div className="text-right">
          <p className="font-bold">{costPerHour} cost/hour</p>
        </div>
      </div>
    </div>
  );
}

export default Order;
