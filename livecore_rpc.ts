import { ethers } from 'ethers';
const contractABI = require('./LiveCoreV1.json');

const rpcURL = 'https://rpc.ankr.com/gnosis';

// Create a provider
const provider = new ethers.providers.JsonRpcProvider(rpcURL);

// Contract address
const contractAddress = '0x0223ff7efca5aec919c471fa2eb44cda466f1500';

// Create a contract instance
const coreContract = new ethers.Contract(contractAddress, contractABI, provider);

async function getResult() {
    try {
        const result = await coreContract.getCondition(ethers.BigNumber.from("100100000000000015847554740000000000000331288806"));
        console.log(result);
    
    } catch (error) {
        console.error('Error calling function:', error);
    }
}

getResult();