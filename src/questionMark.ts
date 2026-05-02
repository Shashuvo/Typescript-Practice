// ? : ternary operator : helps in decision making

const marriageEligible = (age: number) => {
    const result = age >= 21 ? "You are eligible!" : "You are not eligible!";
    console.log(result);
}

marriageEligible(21);

// ?? : nullish coalescing operator : works only for null/undefined value

const userTheme = null;

const selectedTheme = userTheme ?? "Light Theme";

console.log(selectedTheme);


// difference between ternary and nullish coalescing
const isAuthenticated = undefined;

const AuthenticatedTernary = isAuthenticated ? isAuthenticated : "guest";

const AuthenticatedNull = isAuthenticated ?? "guest";

console.log({ AuthenticatedNull }, { AuthenticatedTernary }); // if isAuthenticated is undefined, it will print guest from both ternary and nullish. and if isAuthenticated is empty string, it will print guest only from ternary. if isAuthenticated have any value, it will print the value from both.

// ?. : optional chaining

const user: {
    address: {
        city: string;
        town: string;
        postalCode?: string;//optional chaining
    }
} = {
    address: {
        city: "Ctg",
        town: "ctg",
    },
}

const postalCode = user?.address?.postalCode;

console.log(postalCode);
