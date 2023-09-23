//This runs locally on the user's machine and checks the API status every hour.


const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter your OpenAI secret key: ', (apiKey) => {
    console.log('Starting hourly checks...');
    // First immediate check
    checkAPIStatus(apiKey).then(status => {
        console.log(status);
    });

    // Set an interval to run the function every hour
    setInterval(() => {
        checkAPIStatus(apiKey).then(status => {
            console.log(status);
        });
    }, 3600000);  // 3600000 milliseconds = 1 hour

    rl.close();
});


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