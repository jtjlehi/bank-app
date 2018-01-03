"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkingAccount_1 = require("./accounts/checkingAccount");
var transactionOriginEnum_1 = require("./transaction/transactionOriginEnum");
var myCheckingAccount = new checkingAccount_1.CheckingAccount('Jared', new Date(100, 4, 4));
function testWithdraw(numberOfTimes, account) {
    for (var i = 0; i < numberOfTimes; i++) {
        account.withdrawMoney(.99, 'test', transactionOriginEnum_1.TransactionOrigin.phone);
    }
}
testWithdraw(1001, myCheckingAccount);
//# sourceMappingURL=test.js.map