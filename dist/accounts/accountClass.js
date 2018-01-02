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
        this.month = [];
    }
    Account.prototype.advanceDate = function (numberOfDays) {
        var monthsAdvanced = this.advance(numberOfDays);
        this.addInterest(monthsAdvanced);
    };
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
        var year = this.date.getFullYear();
        var month = this.date.getMonth();
        var dayOfMonth = this.date.getDate();
        this.date = new Date(year, month, dayOfMonth + numberOfDays);
        if (month !== this.date.getMonth()) {
            this.month = [];
        }
        return (this.date.getFullYear() - year) * 12 + (this.date.getMonth() - month);
    };
    Account.prototype.addInterest = function (months) {
        console.log(this.balance);
        for (var i = 0; i < months; i++) {
            this.balance = this.balance + this.balance * this.interest / 12;
            console.log(this.balance);
        }
    };
    return Account;
}());
exports.Account = Account;
//# sourceMappingURL=accountClass.js.map