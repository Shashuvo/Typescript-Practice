// function
// normal, arrow

// <--Normal function-->
function addNormal(num1: number, num2: number): number {
    return num1 + num2;
}

// <--Arrow function-->
const addArrow = (num1: number, num2: number): number => num1 + num2;

//object => function => method

const user = {
    name: "shaha",
    balance: 0,
    addBalance(value: number) {
        return this.balance + value;
    }
}

// loop function

const numArr = [2, 4, 6];

const sqrArr = numArr.map((num: number): number => num * num);


// console
console.log(addNormal(1, 2), addArrow(3, 4), user.addBalance(1000), sqrArr);
