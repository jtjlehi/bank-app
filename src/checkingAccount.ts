import {displayClassName, displayClassNameWithPurpose, nonImplementedMethod} from "./decorators";
import {Account} from "./accountInterface";

@displayClassNameWithPurpose('An account class for people who want to withdraw from there account easily')
export class CheckingAccount implements Account {
    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number;
    accountType: AccountType;
    accountHistory: Transaction[];
    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
        throw new Error("Method not implemented.");
    }
    depositMoney(amount: number, description: string): Transaction {
        throw new Error("Method not implemented.");
    }
    advanceDate(numberOfDays: number) {
        throw new Error("Method not implemented.");
    }
}