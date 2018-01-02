import { CheckingAccount } from './accounts/checkingAccount';
import {TransactionOrigin} from './transaction/transactionOriginEnum';

let myCheckingAccount = new CheckingAccount('Jared', new Date(100, 4, 4));

myCheckingAccount.withdrawMoney(40, 'test', TransactionOrigin.web);
myCheckingAccount.advanceDate(40);