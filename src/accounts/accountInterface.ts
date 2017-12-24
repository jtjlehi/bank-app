import {Transaction} from "../transaction/transactionInterface";
import {TransactionOrigin} from '../transaction/transactionOriginEnum';

export interface Account {
    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number;
    accountHistory : Transaction[];
    accountType: AccountType;
    advanceDate(numberOfDays: number);
    withdrawMoney(amount: number,
                  description: string,
                  transactionOrigin: TransactionOrigin)
        : Transaction;
    depositMoney(amount: number,
                 description: string)
        : Transaction;
}