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

    async pay(bets: Bet[]): Promise<[number, number]>{
        let outcome:number=this.simulateSpin();
        let totalPayoff: number=0;
        for(let bet of bets){
            totalPayoff+=this.betPayoff(outcome, bet);
        }
        await this.contractService.spin(outcome);
        return([outcome, totalPayoff]);
    }
}

