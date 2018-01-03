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
    //protected variables
    protected interest;
    protected date: Date;
    protected month: {1: number, 2: number, 3: number};
    protected currentTransaction: Transaction;
    protected transactionCost: number;
    //constructor
    constructor(name: string, birthDate: Date) {
        this.accountHolderName = name;
        this.accountHolderBirthDate = birthDate;
        this.accountHistory = [];
        this.date = new Date();
        this.month = {1: 0, 2: 0, 3: 0}
    }
    //methods
    abstract withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction;
    depositMoney(amount: number, description: string): Transaction {
        console.log(this.balance);
        let transaction = new TransactionClass(amount, TransactionOrigin.web);
        this.balance = transaction.deposit(this.balance, description);
        console.log(transaction.description);
        return transaction;
    }
    advanceDate(numberOfDays: number){
        let monthsAdvanced = this.advance(numberOfDays);
        this.addInterest(monthsAdvanced);
    }
    //non interface methods
    //withdrawMoney related methods
    protected balanceCheck(amount: number, transactionType: TransactionOrigin): void {
        if(this.balance - amount >= 0) {
            this.successWithdraw();
        }
        else{
            this.failWithdraw('Withdrawl is over balance.');
        }
    }
    protected successWithdraw() {
        //make the withdrawl
        this.balance = this.balance - this.currentTransaction.amount;
        //say the transaction was a success
        this.currentTransaction.successWithdraw(this.balance);
        //increase number of transactions for the month
        this.month[this.currentTransaction.type] += 1;
    }
    protected failWithdraw(reason: string) {
        //make the transaction fail
        this.currentTransaction.failWithdraw(this.balance, reason);
    }
    protected completeTransaction() {
        //store the transaction
        this.accountHistory.push(this.currentTransaction);
        //log the transaction
        console.log(this.currentTransaction.description);
        //return the transaction
        return this.currentTransaction;
    }
    //depositMoney related methods
    protected deposit(amount: number) {
        this.balance += amount;
    }
    //advanceDate related methods
    protected advance(numberOfDays: number): number {
        let year = this.date.getFullYear();
        let month = this.date.getMonth();
        let dayOfMonth = this.date.getDate();
        this.date = new Date(year, month, dayOfMonth + numberOfDays);
        if (month !== this.date.getMonth()) {
            this.month = {1: 0, 2: 0, 3: 0};
        }
        return (this.date.getFullYear() - year) * 12 + (this.date.getMonth() - month);
    }
    protected addInterest(months: number) {
        console.log(this.balance)
        for(let i = 0; i < months; i ++) {
            this.balance = this.balance + this.balance * this.interest/12;
            console.log(this.balance);
        }
    }
}