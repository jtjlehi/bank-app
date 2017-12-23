"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Account = (function () {
    function Account(name, birthDate) {
        this.accountHolderName = name;
        this.accountHolderBirthDate = birthDate;
    }
    Account.prototype.setBalance = function (newBalance) {
        this.balance = newBalance;
    };
    Account.prototype.getBalance = function () {
        if (this.balance) {
            return (this.balance);
        }
    };
    return Account;
}());
exports.Account = Account;
//# sourceMappingURL=accountClass.js.map