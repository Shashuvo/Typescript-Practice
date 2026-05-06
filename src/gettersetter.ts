class BankAccount {
    readonly id: number;
    name: string;
    private balance: number;
    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    // setter
    set addBalance(balance: number) {
        this.balance = this.balance + balance;
    }
    // getter
    get getBalance() {
        return this.balance;
    }
}


const myAccount = new BankAccount(1, "Shaha", 20);

myAccount.addBalance = 100;

console.log(myAccount, myAccount.getBalance);
