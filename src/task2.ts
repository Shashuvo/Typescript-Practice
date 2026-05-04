type Person = { name: string; age: number };

type JobDetails = { role: string; salary: number };

type Employee = Person & JobDetails;

const getProfile = (employee: Employee) => {
    return `Name: ${employee.name}, Role: ${employee.role}`;
}

const employee1: Employee = {
    name: "habla",
    age: 20,
    role: "babla",
    salary: 20000
}

const result = getProfile(employee1);

console.log({ result });