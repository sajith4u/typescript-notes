var message: string = "Hello World"
console.log(message)

class Greeting {

    greet(): void {
        let message = 123_456_475;
        console.log("Hello World!!!" + message)
    }
}

class MyTest {

    demo(): void {
        var x: string = "Sajith"

        var str = '1'
        var str2: number = <number><any>str   //str is now of type number 
        console.log(typeof (str2))

        console.log("My Message " + x)
    }


}

var obj = new Greeting();
obj.greet();

var x = new MyTest();
x.demo();


let numbers = [1, 2, 5];
let sample: number[] = [];


let tupples: [number, string] = [10, 'Sajith'];
console.log(tupples[0]);
console.log(tupples[1]);

const enum Size {
    Small = 1, Medium, Large
};

enum Demo {
    Small = 's', Medium = 'm', Large = 'l'
};

let mySize: Size = Size.Large;
console.log("==== Enums ===");
console.log(mySize);



function calculateTax(income: number, taxYear: number): number {
    if (taxYear < 2020)
        return income * 100 / 51.5;
    return income * 100 / 23.5;
}

function calculateTaxV2(income: number, taxYear = 5000): number {
    if (taxYear < 2020)
        return income * 100 / 51.5;
    return income * 100 / 23.5;
}


let c = calculateTax(100, 2023);
console.log(c);
// object

let demo = { id: 1, name: 'Sajith' };

let demo2: { readonly id: number, name: string, age?: number } = { id: 1, name: 'Sajith' };

console.log(demo2.age);

type Employee = {
    readonly id: number, name: string, age?: number, method: (date: Date) => void
}

let demo3: Employee = {
    id: 1, name: 'Sajith', method: (date: Date) => {
        console.log(date)
    }
};


demo3.method(new Date());



function kgToLbs(wight: number | string): number {
    if (typeof wight === 'number') {
        return wight * 100;
    } else {
        return parseFloat(wight) * 100;
    }
}

console.log(kgToLbs(2.2));
console.log(kgToLbs("2.2"));


type Resize = {
    resize: () => void;
}

type Quality = {
    improve: () => void;
}

type ImageQuality = Resize & Quality;

let myImage: ImageQuality = {
    resize: () => {

    },
    improve: () => {

    }
}

type Quantity = 50 | 100;

// Literal (exact values)
let quantity: Quantity = 100;



function check(value: string | null) {
    if (value) {
        console.log(value.toUpperCase());
    } else {
        console.log('Null Value');
    }
}


check(null);


type Customer = {
    date: Date
}
function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { date: new Date() };
}


console.log(getCustomer(1)?.date?.getFullYear());