// spread and rest operator

// <--spread operator-->

const friends = ["cintu", "mintu"];

const schoolFriends = ["bulbul", "chulbul"];

const collegeFriends = ["hablu", "bablu"];

friends.push(...schoolFriends);
friends.push(...collegeFriends);

console.log(friends);


// <--rest operator-->

const sentInvitation = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`sent invitation to ${friend}.`));
}

sentInvitation("bala", "lala", "kala", "mala");

