import {Transaction as TransactionInterface} from './transactionInterface';
import {TransactionOrigin} from './transactionOriginEnum';

export class TransactionClass implements TransactionInterface {
    success: boolean;
    amount: number;
    resultBalance: number;
    transactionDate: Date;
    description: string;
    errorMessage: string;
    constructor(success: boolean) {
        this.success = success;
    }
    successWithdraw(amount: number, balance: number, type: TransactionOrigin) {
        let resultBalance = balance - amount
        this.amount = amount;
        this.resultBalance = balance - amount;
        this.description = `Withdrew $${amount} from the account using ${TransactionOrigin[type]} resulting in a balance of $${balance}.`
        this.errorMessage = '';
    }
    failWithdraw(balance: number, error: string) {
        this.amount = 0;
        this.resultBalance = balance;
        this.description = `Failed to withdraw money`;
        this.errorMessage = `Withdrawl failure: ${error}`
    }
}