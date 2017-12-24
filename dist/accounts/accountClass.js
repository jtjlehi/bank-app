"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transactionClass_1 = require("../transaction/transactionClass");
var Account = (function () {
    //constructor
    function Account(name, birthDate) {
        this.accountHolderName = name;
        this.accountHolderBirthDate = birthDate;
        this.accountHistory = [];
    }
    Account.prototype.withdraw = function (amount, cbk) {
        if (this.balance - amount >= 0) {
            this.balance = this.balance - amount;
            return cbk();
        }
        else {
            var transaction = new transactionClass_1.TransactionClass(false);
            transaction.failWithdraw(this.balance, 'Withdrawl is over balance');
        }
    };
    Account.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    return Account;
}());
exports.Account = Account;
//# sourceMappingURL=accountClass.js.map