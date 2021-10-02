import { Injectable } from '@angular/core';
import Web3  from 'Web3';
//import * as TruffleContract from 'truffle-contract';

declare let require: any;
declare let window: any;

//const tokenAbi = require('../../../truffle/build/contracts/Transfer.json');

@Injectable({
  providedIn: 'root'
})

export class ContractService {
  account: any = null;
  private readonly _web3: any;
  constructor() {
  }

  private async ConnectAccount() {
    if (window.ethereum) {
        await window.ethereum.send('eth_requestAccounts');
        window.web3 = new Web3(window.ethereum);

        var accounts = await window.web3.eth.getAccounts();
        this.account = accounts[0];
        console.log('contract.service :: account');
        console.log(this.account);
    }

  }

  public async getAccount(){
      await this.ConnectAccount();
      return(this.account);

  }

}