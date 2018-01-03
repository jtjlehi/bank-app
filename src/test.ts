import { CheckingAccount } from './accounts/checkingAccount';
import {TransactionOrigin} from './transaction/transactionOriginEnum';
import { Account } from './accounts/accountClass';
import { SavingAccount } from './accounts/savingAccount';
import { RetirementAccount } from './accounts/retirementClass';

let myCheckingAccount = new CheckingAccount('Jared', new Date(100, 4, 4));
let mySavingAccount = new SavingAccount('Jared', new Date(100, 4, 4));
let myRetirementAccount = new RetirementAccount('Jared', new Date(100, 4, 4));

function testWithdraw(numberOfTimes: number, account: Account, type: TransactionOrigin) {
    for(let i = 0; i < numberOfTimes; i ++) {
        account.withdrawMoney(10, 'test', type);
    }
}
testWithdraw(7, myRetirementAccount, TransactionOrigin.phone);