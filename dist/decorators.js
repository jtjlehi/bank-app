"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function displayClassName(target) {
    console.log(target.name);
}
exports.displayClassName = displayClassName;
function nonImplementedMethod(target, propertyKey, descriptor) {
    throw new Error("Method not implemented.");
}
exports.nonImplementedMethod = nonImplementedMethod;
function displayClassNameWithPurpose(purpose) {
    return function (target) {
        console.log(target.name + " has purpose of: " + purpose);
    };
}
exports.displayClassNameWithPurpose = displayClassNameWithPurpose;
//# sourceMappingURL=decorators.js.map