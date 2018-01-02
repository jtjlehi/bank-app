import {Transaction as TransactionInterface} from './transactionInterface';
import {TransactionOrigin} from './transactionOriginEnum';

export class TransactionClass implements TransactionInterface {
    success: boolean;
    amount: number;
    type: TransactionOrigin;
    resultBalance: number;
    transactionDate: Date;
    description: string;
    errorMessage: string;
    constructor(amount: number, type: TransactionOrigin) {
        this.amount = amount;
        this.type = type;
    }
    successWithdraw(balance: number) {
        this.success
        let resultBalance = balance - this.amount
        this.resultBalance = balance - this.amount;
        this.description = `Withdrew $${this.amount} from the account using ${TransactionOrigin[this.type]} resulting in a balance of $${balance}.`
        this.errorMessage = '';
    }
    failWithdraw(balance: number, error: string) {
        this.success = false;
        this.amount = 0;
        this.resultBalance = balance;
        this.description = `Failed to withdraw money`;
        this.errorMessage = `Withdrawl failure: ${error}`
    }
}