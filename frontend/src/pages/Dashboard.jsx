/*
Your current transactions:
Seller:
List of items:{public address of buyer, image, duration, and money collected, button with CANCEL transaction} 

Buyer:
List of itemsl {public address of seller, image, duration, and money spent, button with CANCEL transaction}
*/

// Compare this snippet from frontend/src/components/Orders.js:



import React from 'react';
import Order from '../components/Order'; // Assuming the Order component is in the same directory



const Dashboard = () => {

  // Sample data
  const itemsBeingSold = [
    {
      name: "OpenAI API",
      duration: "2 hours",
      cost: "100 ETH",
      publicAddress: "0xAbC1234567890DeFgHiJK",
      costPerHour: "50 ETH",
      isSeller: true,
      image: "https://path-to-seller-image1.jpg"
    },
    {
      name: "GPT-3 API",
      duration: "1 hour",
      cost: "50 ETH",
      publicAddress: "0xMnOp1234567890QrStUv",
      costPerHour: "50 ETH",
      isSeller: true,
      image: "https://path-to-seller-image2.jpg"
    }
  ];

  const itemsBeingBought = [
    {
      name: "Something else",
      duration: "3 hours",
      cost: "150 ETH",
      publicAddress: "0xZyX9876543210WvUtSr",
      costPerHour: "50 ETH",
      isSeller: false,
      image: "https://path-to-buyer-image1.jpg"
    },
    {
      name: "Another thing",
      duration: "4 hours",
      cost: "200 ETH",
      publicAddress: "0xLmNo9876543210AbCdEf",
      costPerHour: "50 ETH",
      isSeller: false,
      image: "https://path-to-buyer-image2.jpg"
    }
  ];

  return (
    <div>
      <h2 className="text-xl mb-4">Dashboard</h2>

      <h3 className="text-lg mb-2">Items being sold:</h3>
      {itemsBeingSold.map((item, index) => (
        <Order 
          key={index}
          name = {item.name}
          duration={item.duration}
          cost={item.cost}
          publicAddress={item.publicAddress}
          costPerHour={item.costPerHour}
          isSeller={item.isSeller}
          image={item.image}
        />
      ))}
      
      <h3 className="text-lg mb-2 mt-6">Items being bought:</h3>
      {itemsBeingBought.map((item, index) => (
        <Order 
          
          key={index}
          name = {item.name}
          duration={item.duration}
          cost={item.cost}
          publicAddress={item.publicAddress}
          costPerHour={item.costPerHour}
          isSeller={item.isSeller}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default Dashboard;
