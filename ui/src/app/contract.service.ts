import { Injectable } from '@angular/core';
import Web3  from 'Web3';
//import * as TruffleContract from 'truffle-contract';

declare let require: any;
declare let window: any;

const ABI = require('../../../contract/abi.json');
const ADDRESS = "0x6d0466F129fb6aeCb1741280C806464dCFd2310f";

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

  public async getAccount(): Promise<string>{
    await this.connect();
    return(this.account);
  }

  public async totalSupply(): Promise<number>{
    await this.connect();
    let supply:number = await this.contract.methods.totalSupply().call();
    return(supply / 10**18 );
  }

  public async balanceOf(address:string): Promise<number>{
    await this.connect();
    let balance:number = await this.contract.methods.balanceOf(address).call();
    return(balance / 10**18 );
  }

  public async spin(spinOutcome:number){
    let staticBets = [{betType:1, cellNumber:0, amount:1},{betType:0, cellNumber:1, amount:1}];
    await this.contract.methods.spin(staticBets,spinOutcome).send({from:this.account});
  }

}