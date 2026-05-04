//keyOf operator
type Vehicle = {
    bike: string;
    cng: string;
    car: string
}

type MyVehicle = keyof Vehicle;

const myvehicle: MyVehicle = "bike";

//key of constraint

const getPropertyFromObj = <T>(obj: T, key: keyof T) => {
    return obj[key];
}

type User = {
    id: number;
    name: string;
    address: {
        city: string;
    };
}


type Product = {
    pid: number;
    pname: string;
    batch: {
        batchName: string;
    }
}

type Student = {
    sid: number;
    name: string;
    batch: {
        year: string;
    }
}

const user: User = {
    id: 1,
    name: "loli",
    address: {
        city: "dhaka",
    },
}

const product: Product = {
    pid: 2,
    pname: "boli",
    batch: {
        batchName: "yellow",
    },
}

const student: Student = {
    sid: 3,
    name: "koli",
    batch: {
        year: "2016",
    },
}



const result1 = getPropertyFromObj(user, "id");

const result2 = getPropertyFromObj(product, "pname");

const result3 = getPropertyFromObj(student, "batch");

console.log(result1, result2, result3);