class Person {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSleep(numOfHours: number) {
        console.log(`${this.name} is sleeping for ${numOfHours} hours`);
    }
}


class Student extends Person { };

class Teacher extends Person {
    designation: string;
    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClass(numOfHours: number) {
        console.log(`${this.name} takes class for ${numOfHours} hours`);
    }
}


const student1 = new Student("jolil", 20, "Dhaka");

const teacher1 = new Teacher("kolil", 36, "Chattogram", "professor");

student1.getSleep(10);
teacher1.getSleep(10);
teacher1.takeClass(6);