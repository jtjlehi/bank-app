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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("../decorators");
var transactionClass_1 = require("../transaction/transactionClass");
//import {Account} from "./accountInterface";
var accountClass_1 = require("./accountClass");
var CheckingAccount = (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(name, birthDate) {
        var _this = _super.call(this, name, birthDate) || this;
        _this.balance = 1000;
        return _this;
    }
    CheckingAccount.prototype.withdrawMoney = function (amount, description, transactionType) {
        var _this = this;
        if (this.accountHistory.length < 1001) {
            return this.withdraw(amount, function () {
                var transaction = new transactionClass_1.TransactionClass(true);
                transaction.successWithdraw(amount, _this.balance, transactionType);
                console.log(transaction.description);
                _this.accountHistory.push(transaction);
                return transaction;
            });
        }
    };
    CheckingAccount.prototype.depositMoney = function (amount, description) {
        throw new Error("Method not implemented.");
    };
    CheckingAccount.prototype.advanceDate = function (numberOfDays) {
        throw new Error("Method not implemented.");
    };
    CheckingAccount = __decorate([
        decorators_1.displayClassNameWithPurpose('An account class for people who want to withdraw from there account easily')
    ], CheckingAccount);
    return CheckingAccount;
}(accountClass_1.Account));
exports.CheckingAccount = CheckingAccount;
//# sourceMappingURL=checkingAccount.js.map