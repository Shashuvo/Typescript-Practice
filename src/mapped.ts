type Area<T> = {
    [key in keyof T]: T[key]; //mapping
}

const area: Area<{ height: string, width: number }> = {
    height: "40",
    width: 30,
}