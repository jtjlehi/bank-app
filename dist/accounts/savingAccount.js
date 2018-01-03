"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var accountClass_1 = require("./accountClass");
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(name, birthDate) {
        var _this = _super.call(this, name, birthDate) || this;
        _this.balance = 10000;
        _this.interest = .02;
        return _this;
    }
    SavingAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        throw new Error("Method not implemented.");
    };
    return SavingAccount;
}(accountClass_1.Account));
exports.SavingAccount = SavingAccount;
//# sourceMappingURL=savingAccount.js.map