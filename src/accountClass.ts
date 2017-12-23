import {Account as AccountInterface} from "./accountInterface";

export class Account implements AccountInterface {
    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number;
    accountHistory : Transaction[];
    accountType: AccountType;
    constructor(name, birthDate) {
        this.accountHolderName = name;
        this.accountHolderBirthDate = birthDate;
    }
    setBalance(newBalance: number) {
        this.balance = newBalance;
    }
    getBalance() {
        if(this.balance) {
            return(this.balance);
        }
    }
}