import { TransactionOrigin } from "./transactionOriginEnum";

export interface Transaction {
    success: boolean;
    // amount will be positive for deposits and negative for withdrawals:
    amount: number;
    // resultBalance will be unchanged from the previous balance when success is false.
    resultBalance: number;
    transactionDate: Date;
    description: string;
    // errorMessage will be an empty string when success is true:
    errorMessage: string;
    //transaction type
    type: TransactionOrigin;
    //methods
    successWithdraw(balance: number): void;
    failWithdraw(balance: number, error: string): void;
}