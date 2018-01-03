import { Account } from "./accountClass";
import { TransactionOrigin } from "../transaction/transactionOriginEnum";
import { Transaction } from "../transaction/transactionInterface";

export class SavingAccount extends Account {
    constructor(name: string, birthDate: Date) {
        super(name, birthDate);
        this.balance = 10000;
        this.interest = .02;
    }
    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
        throw new Error("Method not implemented.");
    }
} 