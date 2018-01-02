"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transactionClass_1 = require("../transaction/transactionClass");
var Account = /** @class */ (function () {
    //constructor
    function Account(name, birthDate) {
        this.accountHolderName = name;
        this.accountHolderBirthDate = birthDate;
        this.accountHistory = [];
        this.date = new Date();
        this.month = 0;
    }
    Account.prototype.withdraw = function (amount, transactionType) {
        if (this.balance - amount >= 0) {
            this.balance = this.balance - amount;
            var transaction = new transactionClass_1.TransactionClass(true);
            transaction.successWithdraw(amount, this.balance, transactionType);
            console.log(transaction.description);
            this.accountHistory.push(transaction);
            return transaction;
        }
        else {
            var transaction = new transactionClass_1.TransactionClass(false);
            transaction.failWithdraw(this.balance, 'Withdrawl is over balance');
        }
    };
    Account.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    Account.prototype.advance = function (numberOfDays) {
        console.log(this.date);
        var year = this.date.getFullYear();
        var month = this.date.getMonth();
        var dayOfMonth = this.date.getDate();
        this.date = new Date(year, month, dayOfMonth + numberOfDays);
        console.log(this.date);
    };
    return Account;
}());
exports.Account = Account;
//# sourceMappingURL=accountClass.js.map