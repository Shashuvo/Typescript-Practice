// destructuring

// object destructuring

const user = {
    id: 123,
    name: {
        firstName: "shahariat",
        middleName: "hossen",
        lastName: "shuvo"
    },
    gender: "male",
    favouriteColor: "black"
}

const { name: { firstName, middleName, lastName: myLastName }, gender: myGender, favouriteColor } = user;

console.log(firstName, middleName, myLastName, myGender, favouriteColor);

// array destructuring

const friends = ["kata", "bata", "mata"];

const [, , myBestFriend] = friends;
