type Vehicle ={
    bike: string;
    cng: string;
    car: string
}

type MyVehicle = keyof Vehicle;

const myvehicle : MyVehicle = "bike";