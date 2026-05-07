class BankAccount {
    readonly id: number;
    name: string;
    private balance: number; //encapsulation : only accessible in parent
    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    private addBalance(balance: number) { //encapsulation
        return this.balance = this.balance + balance;
    }
    getAddBalance(value:number){
        this.addBalance(value);
    }
}


const myAccount = new BankAccount(1,"Shaha",20);


myAccount.getAddBalance(100);

console.log(myAccount);