import InxtContractABI from './inxt-token.json';

import contract from 'truffle-contract';

export default async(provider) => {
    const mainContract = contract(InxtContractABI);
    console.log(mainContract);
    mainContract.setProvider(provider);
    let instance = await mainContract.deployed();
    return instance;
}