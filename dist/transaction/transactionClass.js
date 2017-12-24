"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionClass = (function () {
    function TransactionClass(success) {
        this.success = success;
    }
    TransactionClass.prototype.successWithdraw = function (amount, balance, type) {
        var resultBalance = balance - amount;
        this.amount = amount;
        this.resultBalance = balance - amount;
        this.description = "Withdrew $" + amount + " from the account using " + type + " resulting in a balance of $" + balance + ".";
        this.errorMessage = '';
    };
    TransactionClass.prototype.failWithdraw = function (balance, error) {
        this.amount = 0;
        this.resultBalance = balance;
        this.description = "Failed to withdraw money";
        this.errorMessage = "Withdrawl failure: " + error;
    };
    return TransactionClass;
}());
exports.TransactionClass = TransactionClass;
//# sourceMappingURL=transactionClass.js.map