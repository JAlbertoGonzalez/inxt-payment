import React, { Component } from 'react';
import getWeb3 from '../utils/getWeb3';

import InxtContractABI from './inxt-token.json';
import InxtContract from './InxtContract';

class TokenPayment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            account: undefined
        }
    }

    async componentDidMount() {
        this.web3 = await getWeb3();
        //this.inxtContract = await InxtContract(this.web3.currentProvider);

        console.log(this.web3);

        console.log();

        var account = (await this.web3.eth.getAccounts())[0];

        let ABIContract = JSON.parse(InxtContractABI.result);
        let contract = new this.web3.eth.Contract(ABIContract);
        contract.options.address = '0xa8006c4ca56f24d6836727d106349320db7fef82';

        console.log(contract);

        //var token = new this.web3.Contract(InxtContractABI.result);

        //console.log(token);

        this.setState({ account: account});
        console.log(account);
    }

    render() {
        return(
        <React.Fragment>
            <p>Account: {this.state.account}</p>
        </React.Fragment>);
    }
}

export default TokenPayment;