// type interface : defines the shape of an object. similar to type alias

// object 
interface user {
    name: string;
    address: string;
}

interface userWithRole extends user {
    role: "admin" | "guest";
}

const user1: userWithRole = {
    name: "shaha",
    address: "ctg",
    role: "admin"
}

console.log(user1);

// array

interface Num {
    [index: number]: number; //indexing of array
}

const num: Num = [1, 2, 3];

console.log(num);

// function

interface Add {
    (num1: number, num2: number): number;
}

const add: Add = (num1, num2) => {
    return num1 + num2;
}

console.log(add(1, 2));