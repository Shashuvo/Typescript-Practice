const GenericFunction = <T>(value: T) => [value];

const arrString = GenericFunction("apple");
const arrNum = GenericFunction(2);
const arrBool = GenericFunction(true);


// tuple

const GenericTuple = <X, Y>(value1: X, value2: Y) => [value1, value2];

const tuple = GenericTuple(1, 2);

// console.log(tuple);

// object

const addToCourse = <T>(studentInfo: T) => {
    return {
        courseName: "Tabij",
        ...studentInfo
    }
}

const student1 = {
    name: "karim",
    id: 123,
    hasPen: true
}

const student2 = {
    name: "Rahim",
    id: 133,
    hasCar: true
}

const result1 = addToCourse(student1);
const result2 = addToCourse(student2);

console.log(result1, result2);