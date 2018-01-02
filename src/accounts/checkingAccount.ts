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
        if(this.month.length < 1001) {
            return this.withdraw(amount, transactionType);
        }
        else {
            let transaction = new TransactionClass(false);
            transaction.failWithdraw(this.balance, 'You have made to many withdrawls');
            this.accountHistory.push(transaction);
            this.month.push(transaction);
            console.log(transaction.description);
            return transaction;
        }
    }
    depositMoney(amount: number, description: string): Transaction {
        throw new Error("Method not implemented.");
    }
    advanceDate(numberOfDays: number) {
        let monthsAdvanced = this.advance(numberOfDays);
        this.addInterest(monthsAdvanced);
    }
}
