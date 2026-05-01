// Non-Primitive/reference types
// array, object
// TS : tuple

// <--array-->
// single data type array

// Implicit
let colorList = ["yellow", "red", "blue"];
// explicit
let numberList: number[] = [1, 2, 3];

// mixed data type array

// Implicit
let mixedArr = ["eggs", 12, "milk", 2, "bread", 5];
// explicit
let bazarList: (string | number)[] = ["medicine", 200, "clothes", 100];

// <--tuple-->
// single data type tuple
let coordinates = [100, 100];
let circle: [number, number] = [10, 10];
let brand: [string, string] = ["gucci", "BMW"];

// mixed data type tuple
let nameAndRoll: [string, number] = ["shahariat", 51];

let destinationAndTime: [string, string, number] = ["Dhaka", "Chattogram", 3];

// <--object-->

const user: {
    university: "IIUC"; //value=>literal type
    firstName: string;
    middleName?: string;  //optional type
    lastName: string;
    readonly id: number; //access modifier
} = {
    university: "IIUC",
    firstName: "shahariat",
    lastName: "hossen",
    id: 51,
}

console.log(user);