"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkingAccount_1 = require("./accounts/checkingAccount");
var transactionOriginEnum_1 = require("./transaction/transactionOriginEnum");
var myCheckingAccount = new checkingAccount_1.CheckingAccount('Jared', new Date(100, 4, 4));
myCheckingAccount.withdrawMoney(40, 'test', transactionOriginEnum_1.TransactionOrigin.web);
myCheckingAccount.advanceDate(40);
//# sourceMappingURL=test.js.map