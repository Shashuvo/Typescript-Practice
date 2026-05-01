// type Alias : stops data type from repeating

// object

type User = {
    id: number,
    name: {
        firstName: string,
        middleName: string,
        lastName: string
    },
    gender: string,
    address: string
};

const user1: User = {
    id: 123,
    name: {
        firstName: "shahariat",
        middleName: "hossen",
        lastName: "shuvo"
    },
    gender: "male",
    address: "ctg"
};

const user2: User = {
    id: 123,
    name: {
        firstName: "C",
        middleName: "M",
        lastName: "M"
    },
    gender: "female",
    address: "ctg"
};

console.log(user1, user2);


// function

type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => num1 + num2;

console.log(add(1, 2));
