const hre = require("hardhat");
const axios = require('axios');

async function checkAPIStatus(apiKey) {
  const endpoint = 'https://api.openai.com/v1/engines/davinci/completions';
  const headers = {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
  };

  const data = {
      prompt: "Translate the following English text to French: 'Hello, how are you?'",
      max_tokens: 1
  };

  try {
      const response = await axios.post(endpoint, data, { headers });
      if (response.status === 200) {
          return `API is active. Response: ${JSON.stringify(response.data.choices[0].text)}`;
      } else {
          return `Received status code ${response.status}.`;
      }
  } catch (error) {
      return 'Error while accessing API. It might be inactive or the key might be incorrect.';
      //Call the withdraw function from the smart contract


  }
}