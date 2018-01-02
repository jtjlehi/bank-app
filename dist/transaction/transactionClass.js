"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transactionOriginEnum_1 = require("./transactionOriginEnum");
var TransactionClass = /** @class */ (function () {
    function TransactionClass() {
    }
    TransactionClass.prototype.successWithdraw = function (amount, balance, type) {
        this.success;
        var resultBalance = balance - amount;
        this.amount = amount;
        this.resultBalance = balance - amount;
        this.description = "Withdrew $" + amount + " from the account using " + transactionOriginEnum_1.TransactionOrigin[type] + " resulting in a balance of $" + balance + ".";
        this.errorMessage = '';
    };
    TransactionClass.prototype.failWithdraw = function (balance, error) {
        this.success = false;
        this.amount = 0;
        this.resultBalance = balance;
        this.description = "Failed to withdraw money";
        this.errorMessage = "Withdrawl failure: " + error;
    };
    return TransactionClass;
}());
exports.TransactionClass = TransactionClass;
//# sourceMappingURL=transactionClass.js.map