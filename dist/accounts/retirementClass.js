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
var accountClass_1 = require("./accountClass");
var transactionOriginEnum_1 = require("../transaction/transactionOriginEnum");
var decorators_1 = require("../decorators");
var transactionClass_1 = require("../transaction/transactionClass");
var RetirementAccount = /** @class */ (function (_super) {
    __extends(RetirementAccount, _super);
    function RetirementAccount(name, birthDate) {
        var _this = _super.call(this, name, birthDate) || this;
        _this.balance = 100000;
        _this.interest = .03;
        return _this;
    }
    RetirementAccount.prototype.withdrawMoney = function (amount, description, transactionType) {
        this.currentTransaction = new transactionClass_1.TransactionClass(amount, transactionType);
        if (transactionType === transactionOriginEnum_1.TransactionOrigin.branch && this.month[transactionType] < 1000) {
            this.balanceCheck(amount, transactionType, .1);
        }
        else if (this.month[transactionType] < 6) {
            this.balanceCheck(amount, transactionType, .1);
        }
        else {
            this.failWithdraw('You have made to many withdrawls via the ' + transactionOriginEnum_1.TransactionOrigin[this.currentTransaction.type]);
        }
        return this.completeTransaction();
    };
    RetirementAccount = __decorate([
        decorators_1.displayClassNameWithPurpose('An account that collects good interest, but is not easy to withdraw from and charges 10% transaction fee')
    ], RetirementAccount);
    return RetirementAccount;
}(accountClass_1.Account));
exports.RetirementAccount = RetirementAccount;
//# sourceMappingURL=retirementClass.js.map