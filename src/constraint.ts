//constraint: set strict rules

type mustInfo = { name: string, id: number };

const addToCourse = <T extends mustInfo>(studentInfo: T) => {
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

const student3 = {
    name: "sahim",
    id: 134,
    hasCar: true
}

const result1 = addToCourse(student1);
const result2 = addToCourse(student2);
const result3 = addToCourse(student3);

console.log(result1, result2, result3);