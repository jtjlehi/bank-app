"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Account = /** @class */ (function () {
    //constructor
    function Account(name, birthDate) {
        this.accountHolderName = name;
        this.accountHolderBirthDate = birthDate;
        this.accountHistory = [];
        this.date = new Date();
        this.month = { 1: 0, 2: 0, 3: 0 };
    }
    Account.prototype.advanceDate = function (numberOfDays) {
        var monthsAdvanced = this.advance(numberOfDays);
        this.addInterest(monthsAdvanced);
    };
    //non interface methods
    //withdrawMoney related methods
    Account.prototype.balanceCheck = function (amount, transactionType) {
        if (this.balance - amount >= 0) {
            this.successWithdraw();
        }
        else {
            this.failWithdraw('Withdrawl is over balance.');
        }
    };
    Account.prototype.successWithdraw = function () {
        //make the withdrawl
        this.balance = this.balance - this.currentTransaction.amount;
        //say the transaction was a success
        this.currentTransaction.successWithdraw(this.balance);
        //increase number of transactions for the month
        this.month[this.currentTransaction.type] += 1;
    };
    Account.prototype.failWithdraw = function (reason) {
        //make the transaction fail
        this.currentTransaction.failWithdraw(this.balance, reason);
    };
    //depositMoney related methods
    Account.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    //advanceDate related methods
    Account.prototype.advance = function (numberOfDays) {
        var year = this.date.getFullYear();
        var month = this.date.getMonth();
        var dayOfMonth = this.date.getDate();
        this.date = new Date(year, month, dayOfMonth + numberOfDays);
        if (month !== this.date.getMonth()) {
            this.month = { 1: 0, 2: 0, 3: 0 };
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