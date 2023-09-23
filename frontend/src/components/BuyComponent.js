import React from 'react';
import Order from './Order';

const apiUrl = "https://api.cloudnouns.com/v1/pfp";

const availableAPIs = [
  {
    name: 'API 1',
    duration: '30 days',
    cost: '$50',
    publicAddress: '0x123456789abcdef',
    costPerHour: '$1.67',
    isSeller: false,
    image: 'https://api.cloudnouns.com/v1/pfp',
    isUpForSale: true,
  },
  {
    name: 'API 2',
    duration: '15 days',
    cost: '$30',
    publicAddress: '0x987654321abcdef',
    costPerHour: '$2.00',
    isSeller: true,
    image: 'https://api.cloudnouns.com/v1/pfp',
    isUpForSale: true,
  },
  {
    name: 'API 3',
    duration: '30 days',
    cost: '$50',
    publicAddress: '0x123456789abcdef',
    costPerHour: '$1.67',
    isSeller: false,
    image: 'https://api.cloudnouns.com/v1/pfp',
    isUpForSale: true,
  },
  {
    name: 'API 4',
    duration: '15 days',
    cost: '$30',
    publicAddress: '0x987654321abcdef',
    costPerHour: '$2.00',
    isSeller: true,
    image: 'https://api.cloudnouns.com/v1/pfp',
    isUpForSale: true,
  }
  // Add more API objects as needed
];

function BuyComponent() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* Centered and blended-in menu tab */}
      <div className="bg-opacity-70 p-4 w-full h-full">
        <h1 className="text-2xl font-bold mb-4">Available APIs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {availableAPIs.map((item, index) => (
          <Order 
            key={index}
            name = {item.name}
            duration={item.duration}
            cost={item.cost}
            publicAddress={item.publicAddress}
            costPerHour={item.costPerHour}
            isSeller={item.isSeller}
            image={item.image}
            isUpForSale={true}
          />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BuyComponent;