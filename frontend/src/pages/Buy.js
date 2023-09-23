import React from 'react';
import Order from '../components/Order';

const availableAPIs = [
  {
    name: 'API 1',
    duration: '30 days',
    cost: '$50',
    publicAddress: '0x123456789abcdef',
    costPerHour: '$1.67',
    isSeller: false,
    image: 'api1.png',
    isUpForSale: true,
  },
  {
    name: 'API 2',
    duration: '15 days',
    cost: '$30',
    publicAddress: '0x987654321abcdef',
    costPerHour: '$2.00',
    isSeller: true,
    image: 'api2.png',
    isUpForSale: true,
  },
  // Add more API objects as needed
];

const Buy = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* Centered and blended-in menu tab */}
      <div className="bg-white bg-opacity-70 p-4 w-4/5 rounded-lg overflow-y-scroll max-h-80">
        <h1 className="text-2xl font-bold mb-4">Available APIs</h1>
        <table className="min-w-full">
          <tbody>
            {availableAPIs.map((api, index) => (
              <tr key={index}>
                <td>
                  <Order {...api} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Buy;