import {Account as AccountInterface} from "./accountInterface";
import {Transaction} from "../transaction/transactionInterface";
import {TransactionClass} from "../transaction/transactionClass";
import {TransactionOrigin} from '../transaction/transactionOriginEnum';

export abstract class Account implements AccountInterface {
    //type definitions
    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number;
    accountHistory : Transaction[];
    accountType: AccountType;
    protected date: Date;
    protected month: Transaction[];
    //constructor
    constructor(name: string, birthDate: Date) {
        this.accountHolderName = name;
        this.accountHolderBirthDate = birthDate;
        this.accountHistory = [];
        this.date = new Date();
        this.month = [];
    }
    //methods
    abstract withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction;
    abstract depositMoney(amount: number, description: string): Transaction;
    abstract advanceDate(numberOfDays: number);
    withdraw(amount: number, transactionType: TransactionOrigin): Transaction {
        if(this.balance - amount >= 0) {
            this.balance = this.balance - amount;
            let transaction = new TransactionClass(true);
            transaction.successWithdraw(amount, this.balance, transactionType);
            console.log(transaction.description);
            this.accountHistory.push(transaction);
            return transaction;
        }
        else{
            let transaction = new TransactionClass(false);
            transaction.failWithdraw(this.balance, 'Withdrawl is over balance');
        }
    }
    deposit(amount: number) {
        this.balance += amount;
    }
    protected advance(numberOfDays: number) {
        let year = this.date.getFullYear();
        let month = this.date.getMonth();
        let dayOfMonth = this.date.getDate();
        this.date = new Date(year, month, dayOfMonth + numberOfDays);
        if (month !== this.date.getMonth()) {
            this.month = [];
        }
        return (this.date.getFullYear() - year) * 12 + (this.date.getMonth() - month);
    }
}