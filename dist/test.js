"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkingAccount_1 = require("./accounts/checkingAccount");
var transactionOriginEnum_1 = require("./transaction/transactionOriginEnum");
var savingAccount_1 = require("./accounts/savingAccount");
var myCheckingAccount = new checkingAccount_1.CheckingAccount('Jared', new Date(100, 4, 4));
var mySavingAccount = new savingAccount_1.SavingAccount('Jared', new Date(100, 4, 4));
function testWithdraw(numberOfTimes, account, type) {
    for (var i = 0; i < numberOfTimes; i++) {
        account.withdrawMoney(.99, 'test', type);
    }
}
testWithdraw(7, mySavingAccount, transactionOriginEnum_1.TransactionOrigin.phone);
//# sourceMappingURL=test.js.map