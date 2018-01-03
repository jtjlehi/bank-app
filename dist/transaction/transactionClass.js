"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transactionOriginEnum_1 = require("./transactionOriginEnum");
var TransactionClass = /** @class */ (function () {
    function TransactionClass(amount, type) {
        this.amount = amount;
        this.type = type;
    }
    TransactionClass.prototype.successWithdraw = function (balance) {
        this.success = true;
        var resultBalance = balance - this.amount;
        this.resultBalance = balance - this.amount;
        this.description = "Withdrew $" + this.amount + " from the account using the " + transactionOriginEnum_1.TransactionOrigin[this.type] + " resulting in a balance of $" + balance + ".";
        this.errorMessage = '';
    };
    TransactionClass.prototype.failWithdraw = function (balance, error) {
        this.success = false;
        this.amount = 0;
        this.resultBalance = balance;
        this.errorMessage = "Failer Reason: " + error;
        this.description = "Failed to withdraw money; " + this.errorMessage;
    };
    TransactionClass.prototype.deposit = function (balance, description) {
        this.success = true;
        this.resultBalance = balance + this.amount;
        this.description = "Deposited $" + this.amount + " into the account. The resulting balance is $" + this.resultBalance + ".\nDescription: " + description;
        return this.resultBalance;
    };
    return TransactionClass;
}());
exports.TransactionClass = TransactionClass;
//# sourceMappingURL=transactionClass.js.map