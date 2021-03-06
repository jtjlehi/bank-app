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
var transactionOriginEnum_1 = require("../transaction/transactionOriginEnum");
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(name, birthDate) {
        var _this = _super.call(this, name, birthDate) || this;
        _this.balance = 1000;
        _this.interest = .01;
        return _this;
    }
    CheckingAccount.prototype.withdrawMoney = function (amount, description, transactionType) {
        this.currentTransaction = new transactionClass_1.TransactionClass(amount, transactionType);
        if (this.month[transactionType] < 1000) {
            this.balanceCheck(amount, transactionType);
        }
        else {
            this.failWithdraw('You have made to many withdrawls via the ' + transactionOriginEnum_1.TransactionOrigin[this.currentTransaction.type]);
        }
        return this.completeTransaction();
    };
    CheckingAccount = __decorate([
        decorators_1.displayClassNameWithPurpose('An account class for people who want to withdraw from there account easily')
    ], CheckingAccount);
    return CheckingAccount;
}(accountClass_1.Account));
exports.CheckingAccount = CheckingAccount;
//# sourceMappingURL=checkingAccount.js.map