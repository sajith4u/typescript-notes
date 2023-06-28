"use strict";
var _a, _b;
var message = "Hello World";
console.log(message);
class Greeting {
    greet() {
        let message = 123456475;
        console.log("Hello World!!!" + message);
    }
}
class MyTest {
    demo() {
        var x = "Sajith";
        var str = '1';
        var str2 = str;
        console.log(typeof (str2));
        console.log("My Message " + x);
    }
}
var obj = new Greeting();
obj.greet();
var x = new MyTest();
x.demo();
let numbers = [1, 2, 5];
let sample = [];
let tupples = [10, 'Sajith'];
console.log(tupples[0]);
console.log(tupples[1]);
;
var Demo;
(function (Demo) {
    Demo["Small"] = "s";
    Demo["Medium"] = "m";
    Demo["Large"] = "l";
})(Demo || (Demo = {}));
;
let mySize = 3;
console.log("==== Enums ===");
console.log(mySize);
function calculateTax(income, taxYear) {
    if (taxYear < 2020)
        return income * 100 / 51.5;
    return income * 100 / 23.5;
}
function calculateTaxV2(income, taxYear = 5000) {
    if (taxYear < 2020)
        return income * 100 / 51.5;
    return income * 100 / 23.5;
}
let c = calculateTax(100, 2023);
console.log(c);
let demo = { id: 1, name: 'Sajith' };
let demo2 = { id: 1, name: 'Sajith' };
console.log(demo2.age);
let demo3 = {
    id: 1, name: 'Sajith', method: (date) => {
        console.log(date);
    }
};
demo3.method(new Date());
function kgToLbs(wight) {
    if (typeof wight === 'number') {
        return wight * 100;
    }
    else {
        return parseFloat(wight) * 100;
    }
}
console.log(kgToLbs(2.2));
console.log(kgToLbs("2.2"));
let myImage = {
    resize: () => {
    },
    improve: () => {
    }
};
let quantity = 100;
function check(value) {
    if (value) {
        console.log(value.toUpperCase());
    }
    else {
        console.log('Null Value');
    }
}
check(null);
function getCustomer(id) {
    return id === 0 ? null : { date: new Date() };
}
console.log((_b = (_a = getCustomer(1)) === null || _a === void 0 ? void 0 : _a.date) === null || _b === void 0 ? void 0 : _b.getFullYear());
//# sourceMappingURL=sample.js.map