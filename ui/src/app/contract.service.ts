import { Injectable } from '@angular/core';
import Web3  from 'Web3';
import { Bet } from './bet';

declare let require: any;
declare let window: any;

const ABI = require('../../../contract/abi.json');
const ADDRESS = "0x552399c58DCDEfa20dFf38914ceC8bdC31734F2C";

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
    //TODO: https://betterprogramming.pub/ethereum-dapps-how-to-load-the-blockchain-8756ca0fa0d1
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.send('eth_requestAccounts');

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


  public async spin(bets:any[]): Promise<string> {
    const receipt = await this.contract.methods.spin(bets).send({from:this.account});
    return(receipt.events.VRFRequested.returnValues.requestId);
  }

}