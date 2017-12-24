import {displayClassName, displayClassNameWithPurpose, nonImplementedMethod} from "../decorators";
import {Transaction} from '../transaction/transactionInterface';
import {TransactionClass} from '../transaction/transactionClass';
//import {Account} from "./accountInterface";
import { Account } from "./accountClass";

@displayClassNameWithPurpose('An account class for people who want to withdraw from there account easily')
export class CheckingAccount extends Account {
    constructor(name, birthDate: Date) {
        super(name, birthDate);
        this.balance = 1000;
    }
    withdrawMoney(amount: number, description: string, transactionType: TransactionOrigin): Transaction {
        if(this.accountHistory.length < 1001) {
            return this.withdraw(amount, () => {
                let transaction = new TransactionClass(true);
                transaction.successWithdraw(amount, this.balance, transactionType);
                console.log(transaction.description);
                this.accountHistory.push(transaction);
                return transaction;
            });
        }
    }
    depositMoney(amount: number, description: string): Transaction {
        throw new Error("Method not implemented.");
    }
    advanceDate(numberOfDays: number) {
        throw new Error("Method not implemented.");
    }
}