// generic : works with variety of data types rather than single one

type GenericArray<T> = Array<T>;

const numList: GenericArray<number> = [1, 2, 3, 4, 5];

const strList: GenericArray<string> = ["a", "b", "c", "d", "e"];

const boolList: GenericArray<boolean> = [true, false];


const user: GenericArray<{ name: string, roll: number }> = [{
    name: "shaha",
    roll: 12
}]