// null type

const getUser = (user: string | null) => {
    const result = user ? `from DB : ${user}` : `from DB : all users`;
    console.log(result);
}

getUser(null);

// unknown type

const discount = (input: unknown) => {
    if (typeof input === 'number') {
        console.log(input * 0.1);
    }
    else if (typeof input === 'string') {
        const [discounted] = input.split(" ");
        console.log(Number(discounted) * 0.1);
    }
    else {
        console.log("please input");
    }
}


discount(100);
discount("100 tk");
discount(null);

// never

const throwError = (msg: string): never => {
    throw new Error(msg);
}

throwError("...error");