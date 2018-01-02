"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkingAccount_1 = require("./accounts/checkingAccount");
var myCheckingAccount = new checkingAccount_1.CheckingAccount('Jared', new Date(100, 4, 4));
var myDate = Date();
myCheckingAccount.advance(30);
//# sourceMappingURL=test.js.map