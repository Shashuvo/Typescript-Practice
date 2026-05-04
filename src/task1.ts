// task 1

type CartItem = {
    name: string;
    price: number;
    quantity?: number;
}

const calculateTotal = (item: CartItem) => {
    const { price, quantity = 1 } = item;
    return price * quantity;
}

const item1: CartItem = {
    name: "laptop",
    price: 10000,
    quantity: 5
}

const item2: CartItem = {
    name: "TV",
    price: 10000,
}
const result1 = calculateTotal(item1);
const result2 = calculateTotal(item2);

console.log(result1, result2);