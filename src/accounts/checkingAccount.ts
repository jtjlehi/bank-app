import {displayClassName, displayClassNameWithPurpose} from "../decorators";
import {Transaction} from '../transaction/transactionInterface';
import {TransactionClass} from '../transaction/transactionClass';
//import {Account} from "./accountInterface";
import { Account } from "./accountClass";
import {TransactionOrigin} from '../transaction/transactionOriginEnum';

@displayClassNameWithPurpose('An account class for people who want to withdraw from there account easily')
export class CheckingAccount extends Account {
    constructor(name: string, birthDate: Date) {
        super(name, birthDate);
        this.balance = 1000;
        this.interest = .01;
    }
    withdrawMoney(amount: number, description: string, transactionType: TransactionOrigin): Transaction {
        this.currentTransaction = new TransactionClass(amount, transactionType);
        if(this.month[transactionType].length < 1001) {
            this.balanceCheck(amount, transactionType);
        }
        else {
            this.currentTransaction.failWithdraw(this.balance, 'You have made to many withdrawls');
            this.accountHistory.push(this.currentTransaction);
            this.month[transactionType].push(this.currentTransaction);
            console.log(this.currentTransaction.description);
        }
        return this.currentTransaction;
    }
    depositMoney(amount: number, description: string): Transaction {
        throw new Error("Method not implemented.");
    }
}
