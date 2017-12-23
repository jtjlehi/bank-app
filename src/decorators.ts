export function displayClassName(target: Function) {
    console.log(target.name);
}
export function nonImplementedMethod(target: Object, propertyKey: string, descriptor: PropertyDecorator) {
    throw new Error("Method not implemented.");
}
export function displayClassNameWithPurpose(purpose: string) {
    return function (target: Function) {
        console.log(`${target.name} has purpose of: ${purpose}`);
    }
}