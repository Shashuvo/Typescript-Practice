class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getSleep(numOfHours: number) {
        console.log(`${this.name} is sleeping for ${numOfHours} hours`);
    }
}

class Student extends Person {
    constructor(name: string, age: number) {
        super(name, age);
    }
    doClass(numOfHours: number) {
        console.log(`${this.name} do class for ${numOfHours} hours`);
    }
}


class Teacher extends Person {
    constructor(name: string, age: number) {
        super(name, age);
    }
    takeClass(numOfHours: number) {
        console.log(`${this.name} takes class for ${numOfHours} hours`);
    }
}

const isStudent = (user: Person): user is Student => {
    return user instanceof Student;
}

const isTeacher = (user: Person): user is Teacher => {
    return user instanceof Teacher;
}

const getUserInfo = (user: Person) => {
    if (isStudent(user)) {
        user.doClass(10)
    }
    else if (isTeacher(user)) {
        user.takeClass(10)
    }
}