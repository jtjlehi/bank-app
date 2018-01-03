"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transactionClass_1 = require("../transaction/transactionClass");
var transactionOriginEnum_1 = require("../transaction/transactionOriginEnum");
var Account = /** @class */ (function () {
    //constructor
    function Account(name, birthDate) {
        this.accountHolderName = name;
        this.accountHolderBirthDate = birthDate;
        this.accountHistory = [];
        this.date = new Date();
        this.month = { 1: 0, 2: 0, 3: 0 };
    }
    Account.prototype.depositMoney = function (amount, description) {
        console.log(this.balance);
        var transaction = new transactionClass_1.TransactionClass(amount, transactionOriginEnum_1.TransactionOrigin.web);
        this.balance = transaction.deposit(this.balance, description);
        console.log(transaction.description);
        return transaction;
    };
    Account.prototype.advanceDate = function (numberOfDays) {
        var monthsAdvanced = this.advance(numberOfDays);
        this.addInterest(monthsAdvanced);
    };
    //non interface methods
    //withdrawMoney related methods
    Account.prototype.balanceCheck = function (amount, transactionType) {
        if (this.transactionCost === undefined) {
            this.transactionCost = 0;
        }
        if (this.balance - amount >= 0) {
            this.successWithdraw(this.transactionCost);
        }
        else {
            this.failWithdraw('Withdrawl is over balance.');
        }
    };
    Account.prototype.successWithdraw = function (transactionCost) {
        //make the withdrawl
        this.balance = this.balance - this.currentTransaction.amount - this.balance * transactionCost;
        //say the transaction was a success
        this.currentTransaction.successWithdraw(this.balance);
        //increase number of transactions for the month
        this.month[this.currentTransaction.type] += 1;
    };
    Account.prototype.failWithdraw = function (reason) {
        //make the transaction fail
        this.currentTransaction.failWithdraw(this.balance, reason);
    };
    Account.prototype.completeTransaction = function () {
        //store the transaction
        this.accountHistory.push(this.currentTransaction);
        //log the transaction
        console.log(this.currentTransaction.description);
        //return the transaction
        return this.currentTransaction;
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
    Account.prototype.findAge = function () {
        var year = this.date.getFullYear() - this.accountHolderBirthDate.getFullYear();
        var month = this.date.getMonth() - this.accountHolderBirthDate.getMonth();
        var day = this.date.getDate() - this.accountHolderBirthDate.getDate();
        if (month > 0) {
            this.age = year;
        }
        if (month < 0) {
            this.age = year - 1;
        }
        else {
            if (day < 0) {
                this.age = year - 1;
            }
            else {
                this.age = year;
            }
        }
    };
    return Account;
}());
exports.Account = Account;
//# sourceMappingURL=accountClass.js.map