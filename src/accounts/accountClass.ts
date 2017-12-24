import {Account as AccountInterface} from "./accountInterface";
import {Transaction} from "../transaction/transactionInterface";
import { TransactionClass } from "../transaction/transactionClass";

export abstract class Account implements AccountInterface {
    //type definitions
    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number;
    accountHistory : Transaction[];
    accountType: AccountType;
    date: Date;
    //constructor
    constructor(name: string, birthDate: Date) {
        this.accountHolderName = name;
        this.accountHolderBirthDate = birthDate;
        this.accountHistory = [];
    }
    //methods
    abstract withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction;
    abstract depositMoney(amount: number, description: string): Transaction;
    abstract advanceDate(numberOfDays: number);
    withdraw(amount: number, cbk: Function): Transaction {
        if(this.balance - amount >= 0) {
            this.balance = this.balance - amount;
            return cbk();
        }
        else{
            let transaction = new TransactionClass(false);
            transaction.failWithdraw(this.balance, 'Withdrawl is over balance');
        }
    }
    deposit(amount: number) {
        this.balance += amount;
    }
}