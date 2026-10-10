
class BankAccount {
    constructor (owner, number, balance) {
        this.owner = owner,
        this.number = number,
        this.balance = balance
    }

    displayAccountinfo () {
        console.log(`${this.owner}'s Bank Account =`);
        console.log(`== Account Number = ${this.number}`);
        console.log(`== Account Balance = ${this.balance}`);

    }

    deposit (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${amount} $ have been Deposited in ${this.owner}'s Bank Account`)
        } else {
            console.log(`Depositing amount can't be Negative`)
        }
           
    } 

    transfer(acc1, acc2, amount) {
        if (amount < 0) {
            console.log("Transferring Amount can't be Negative")
        } else if (amount > acc1.balance) {
            console.log("Transferring Amount is Greater than Avaliable balance")
        } else {
            acc1.balance -= amount
            acc2.balance += amount
            print(`${amount} $ have been Transferred from ${acc1.owner}'s Account to ${acc2.owner}'s Account`)
        }
    }

    withdraw (amount) {
        if (amount < this.balance) {
            this.balance -= amount;
            console.log(`${amount} $ have been Withdrawn from ${this.owner}'s Bank Account`)
        } else {
            console.log(`Withdrawing Amount can't be Greater than Avaliable balance`)
        }
        
    } 
}

account1 = new BankAccount("Greg",31098,650)
account2 = new BankAccount("Mary",32110, 720)
account3 = new BankAccount("Billy",31952, 590)

account1.displayAccountinfo()

console.log("")

account2.displayAccountinfo()

console.log("")

account3.displayAccountinfo()

console.log("")

account1.deposit(45)

console.log("")

account2.withdraw(12)

console.log("")

transfer(account1, account3, 45)

