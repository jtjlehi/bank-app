import { CheckingAccount } from './accounts/checkingAccount';
import {TransactionOrigin} from './transaction/transactionOriginEnum';
import { Account } from './accounts/accountClass';

let myCheckingAccount = new CheckingAccount('Jared', new Date(100, 4, 4));

function testWithdraw(numberOfTimes: number, account: Account) {
    for(let i = 0; i < numberOfTimes; i ++) {
        account.withdrawMoney(.99, 'test', TransactionOrigin.phone);
    }
}
testWithdraw(1001, myCheckingAccount);