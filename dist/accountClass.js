"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Account = (function () {
    function Account(name, birthDate) {
        this.accountHolderName = name;
        this.accountHolderBirthDate = birthDate;
        this.balance = 0;
        this.accountHistory = [];
    }
    Account.prototype.testMethod = function () {
    };
    return Account;
}());
exports.Account = Account;
//# sourceMappingURL=accountClass.js.map