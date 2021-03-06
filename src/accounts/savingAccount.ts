import { Account } from "./accountClass";
import { TransactionOrigin } from "../transaction/transactionOriginEnum";
import { Transaction } from "../transaction/transactionInterface";
import { displayClassNameWithPurpose } from "../decorators";
import { TransactionClass } from "../transaction/transactionClass";

@displayClassNameWithPurpose('An account that collects good interest, but is not easy to withdraw from.')
export class SavingAccount extends Account {
    constructor(name: string, birthDate: Date) {
        super(name, birthDate);
        this.balance = 10000;
        this.interest = .02;
    }
    withdrawMoney(amount: number, description: string, transactionType: TransactionOrigin): Transaction {
        this.currentTransaction = new TransactionClass(amount, transactionType);
        if(transactionType === TransactionOrigin.branch && this.month[transactionType] < 1000) {
            this.balanceCheck(amount, transactionType);
        }
        else if(this.month[transactionType] < 6) {
            this.balanceCheck(amount, transactionType);
        }
        else {
            this.failWithdraw('You have made to many withdrawls via the ' + TransactionOrigin[this.currentTransaction.type]);
        }
        return this.completeTransaction();
    }
} 