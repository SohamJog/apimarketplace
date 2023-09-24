# SOHO

There are four folders in this repository.

**hardhat_smart_contract_env/** is the location of the hardhat project. Inside the folder is a node installation.
To install the necessary npm packages, you will need to run
`npm install --legacy-peer-deps`
The **--legacy-peer-deps** flag is important. npm install will not work without this flag.  
To run hardhat, change your working directory to ./hardhat_smart_contract_env/

**frontend/** hosts the React project for the website. Inside the folder is a separate node installation. 
To install the necessary npm packages, you will need to run
`npm install --legacy-peer-deps`
The **--legacy-peer-deps** flag is important. npm install will not work without this flag. 
To run the website, change your working directory to ./frontend/ and run 
`npm run start` 
or 
`npm start`

**TheGraph/** is the folder used to create the subgraph for our project. 

**auxiliary_scripts/** contains an script meant for the Buyer of an API key to run in order to ensure that their api key is actively working. If it is not, the buyer should cancel the order on the smart contract (through the website).






