import { Bet } from './bet';
import { ContractService } from './contract.service';


export class Dealer {  
    contractService: ContractService;
    constructor(contractService: ContractService) {
        this.contractService=contractService;
        }

    simulateSpin(): number{
        let outcome:number=Math.ceil(Math.random() * 36);
        console.info("Simulated spin outcome= "+outcome);
        return outcome;
    }


    betPayoff(spinOutcome:number, bet:Bet):number{
        if(bet.cell.winningNumbers.includes(spinOutcome)){
            return(bet.cell.payoffFactor*bet.amount);
        } else {
            return(0);
        }
    }

    public adaptBets(bets:Bet[]){
        let amount1:number=bets[0].amount;
        let adaptedBets = [];
        for(let bet of bets){
            adaptedBets.push({betType:1, cellNumber:0, amount:bet.amount});
        }
        return(adaptedBets);
      }

    async pay(bets: Bet[]): Promise<[number, number]>{
        let outcome:number=this.simulateSpin();
        let totalPayoff: number=0;
        for(let bet of bets){
            totalPayoff+=this.betPayoff(outcome, bet);
        }
        await this.contractService.spin(this.adaptBets(bets), outcome);
        return([outcome, totalPayoff]);
    }
}

