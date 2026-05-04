// conditional : type depend on condition

type A = null;
type B = undefined;
type C = A extends undefined ? true : B extends undefined ? true : false;//conditional

type Vehicles = {
    bike: string;
    car: string;
    ship: string;
}

type CheckVehicles<T> = T extends keyof Vehicles ? true : false;

type HasBike = CheckVehicles<"bike">;