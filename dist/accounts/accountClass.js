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
        this.month = { 1: [], 2: [], 3: [] };
    }
    Account.prototype.advanceDate = function (numberOfDays) {
        var monthsAdvanced = this.advance(numberOfDays);
        this.addInterest(monthsAdvanced);
    };
    //non interface methods
    //withdrawMoney related methods
    Account.prototype.balanceCheck = function (amount, transactionType) {
        var transaction = new transactionClass_1.TransactionClass();
        if (this.balance - amount >= 0) {
            //make the withdrawl
            this.balance = this.balance - amount;
            //say the transaction was a success
            transaction.successWithdraw(amount, this.balance, transactionType);
            //store the transaction
            this.accountHistory.push(transaction);
            this.month[transactionType].push(transaction);
            //feedback
            console.log(transaction.description);
            return transaction;
        }
        else {
            transaction.failWithdraw(this.balance, 'Withdrawl is over balance');
        }
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
            this.month = { 1: [], 2: [], 3: [] };
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