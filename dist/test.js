"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkingAccount_1 = require("./accounts/checkingAccount");
var savingAccount_1 = require("./accounts/savingAccount");
var retirementClass_1 = require("./accounts/retirementClass");
var myCheckingAccount = new checkingAccount_1.CheckingAccount('Jared', new Date(2000, 4, 4));
var mySavingAccount = new savingAccount_1.SavingAccount('Jared', new Date(2000, 4, 4));
var myRetirementAccount = new retirementClass_1.RetirementAccount('Jared', new Date(2000, 0, 3));
function testWithdraw(numberOfTimes, account, type) {
    for (var i = 0; i < numberOfTimes; i++) {
        account.withdrawMoney(10, 'test', type);
    }
}
myRetirementAccount.findAge();
//# sourceMappingURL=test.js.map