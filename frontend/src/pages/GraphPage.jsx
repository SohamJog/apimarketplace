/*
Your current transactions:
Seller:
List of items:{public address of buyer, image, duration, and money collected, button with CANCEL transaction} 

Buyer:
List of itemsl {public address of seller, image, duration, and money spent, button with CANCEL transaction}
*/

// Compare this snippet from frontend/src/components/Orders.js:

import React from 'react';
import { useState, useEffect } from 'react';
import GraphComponent from '../components/Graph';

import { createClient, cacheExchange, fetchExchange } from 'urql';

const APIURL = 'https://api.studio.thegraph.com/query/53619/nysub/0.21.0'

const eventsQuery = `
    {
      sellOrderEvents(first: 100) {
        orderNumber
        seller
        price
        duration
      }
      buyOrderEvents(first: 100) {
        orderNumber
        buyer
        startTime
        price
        duration
      }
      cancelOrderEvents(first: 100) {
        orderNumber
        withdrawer
        ethToBuyer
        withdrawTime
      }
    }
`

const GraphPage = () => {

    var client = client = createClient({
      url: APIURL,
      exchanges: [cacheExchange, fetchExchange],
    })

    const [graphArray, setGraphData] = useState([]);

    const handleGraph = async(e) => {
        
        var result = await client.query(eventsQuery).toPromise()
        console.log(result)
        var array = [];
        console.log(result.data)
        
        for (let i = 0; i<result.data.sellOrderEvents.length; i++) {
          let sellOrderEvent = result.data.sellOrderEvents[i]
          let durationInHours = sellOrderEvent.duration/3600 //3600 correlates to an hour in seconds
          let hourlyPrice = sellOrderEvent.price/durationInHours;

          array.push(
            hourlyPrice
          )
        }
        console.log(array)
        setGraphData(array)
    }

    if (graphArray.length == 0) {
        handleGraph()
    }

  return (
    <div className='m-6'>
      <h2 className="text-5xl font-bold text-center mb-4">Analytics</h2>

      <GraphComponent graphData={graphArray} />
      <p className='text-center text-2xl font-semibold'>See market trends of the hourly price of APIs</p>
      <p className='text-center mt-5'>Analytics from a subgraph from TheGraph </p>
      
    </div>
  );
}

export default GraphPage;
