// union |

type UserRole = "admin" | "guest" | "user";

const getDashboard = (user: UserRole) => {
    if (user === "admin") {
        return "Admin Dashboard";
    }
    else if (user === "user") {
        return "User Dashboard";
    }
    else {
        return "Guest Dashboard";
    }
}

console.log(getDashboard("admin"));


// intersection &

type Employee = {
    id: number,
    name: string
}

type Manager = {
    designation: string,
    team: number
}

type ManagerAndEmployee = Employee & Manager;

const Chy: ManagerAndEmployee = {
    id: 123,
    name: "chy",
    designation: "manager",
    team: 20
}

console.log(Chy);
