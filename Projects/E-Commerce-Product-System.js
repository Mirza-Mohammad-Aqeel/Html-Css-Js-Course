
class Product {
    static TotalProducts = 0;
    constructor (name, price, stock) {
        this.name = name,
        this.price = price,
        this.stock = stock
        Product.TotalProducts += 1
    }

    displayProductInfo () {
        console.log(`Product = ${this.name}'s Info =`)
        console.log(`== Price : ${this.price}`)
        console.log(`== Stock : ${this.stock}`)

    }

    buy (quantity) {
        if (this.quantity < quantity) {
            console.log(`Insuffient Stock of ${this.name}`)
        } else if (quantity >= 0) {
            console.log(`Quantity can't be Negative`)
        } else {
            console.log(`You have Bought ${quantity} ${this.name} for ${this.price * this.quantity} $`)
        }
    }

    restock (quantity) {
        if (quantity >= 0) {
            console.log(`Restocking quantity can't be Negative`)
        } else {
            this.quantity += quantity
            console.log(`You have Restocked ${this.name} ${quantity}, worth around ${this.price * this.quantity}`)
        }
    }

    changePrice (newprice) {
        if (newprice >= 0) {
            this.price = newprice
            console.log(`${this.name}'s Price has been Updated to ${newprice} $`)
        } else {
            console.log(`New Price can't be Negative`)

        }
    }

}

product1 = Product("Oranges",25, 1000)
product2 = Product("Apples",10, 1900)
product3 = Product("Eggs",30, 500)

product1.displayProductInfo()
console.log("")
product2.displayProductInfo()
console.log("")
product3.displayProductInfo()
console.log("")

product1.buy(10)
product3.restock(5)
product2.changePrice(15)



