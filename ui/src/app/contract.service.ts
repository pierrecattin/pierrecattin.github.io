import { Injectable } from '@angular/core';
import Web3  from 'Web3';
//import * as TruffleContract from 'truffle-contract';

declare let require: any;
declare let window: any;

const ABI = require('../../../contract/abi.json');
const ADDRESS = "0xf0c40736B432AF63A05b01405eD64b58E263FCCC";

@Injectable({
  providedIn: 'root'
})

export class ContractService {
  account: any = null;
  contract: any = null;

  constructor() {
    this.connect();
  }

  private async connect() {
    if (window.ethereum) {
        await window.ethereum.send('eth_requestAccounts');
        window.web3 = new Web3(window.ethereum);

        var accounts = await window.web3.eth.getAccounts();
        this.account = accounts[0];
        console.log('contract.service :: account');
        console.log(this.account);

        this.contract = new window.web3.eth.Contract(ABI, ADDRESS);
        console.log('contract.service :: contract');
        console.log(this.contract);
        }

  }

  public async getAccount(){
    await this.connect();
      return(this.account);
  }

  public async testTransfer(){
      this.contract.methods.transfer('0x406204caa805B9563df03943bAD133E11fD32D67', (10**18).toString()).send({from:this.account});
  }

}