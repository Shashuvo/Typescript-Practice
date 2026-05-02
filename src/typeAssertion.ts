// type assertion : override type

const weightConverter = (input: string | number): string | number | undefined => {
    if (typeof input === "number") {
        const result = input * 1000;
        return result;
    }
    else if (typeof input === "string") {
        const [value] = input.split(" ");
        const newValue = Number(value) * 1000;
        const result = `converted value is ${newValue}`;
        return result;
    }
}


const result1 = weightConverter(2) as number; //type assertion
const result2 = weightConverter("2 kg") as string; //type assertion

console.log({ result1 }, { result2 });
