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
    protected month: {1: Transaction[], 2: Transaction[], 3: Transaction[]};
    protected currentTransaction: Transaction;
    //constructor
    constructor(name: string, birthDate: Date) {
        this.accountHolderName = name;
        this.accountHolderBirthDate = birthDate;
        this.accountHistory = [];
        this.date = new Date();
        this.month = {1: [], 2: [], 3: []}
    }
    //methods
    abstract withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction;
    abstract depositMoney(amount: number, description: string): Transaction;
    advanceDate(numberOfDays: number){
        let monthsAdvanced = this.advance(numberOfDays);
        this.addInterest(monthsAdvanced);
    }
    //non interface methods
    //withdrawMoney related methods
    protected balanceCheck(amount: number, transactionType: TransactionOrigin): void {
        if(this.balance - amount >= 0) {
            this.successWithdraw
        }
        else{
            this.currentTransaction.failWithdraw(this.balance, 'Withdrawl is over balance');
        }
    }
    protected successWithdraw(amount: number, transactionType: TransactionOrigin) {
        //make the withdrawl
        this.balance = this.balance - amount;
        //say the transaction was a success
        this.currentTransaction.successWithdraw(amount, this.balance, transactionType);
        //store the transaction
        this.accountHistory.push(this.currentTransaction);
        this.month[transactionType].push(this.currentTransaction);
        //feedback
        console.log(this.currentTransaction.description);
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
            this.month = {1:[], 2: [], 3: []};
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