
class Animal {
    constructor(species, name) {
        this.species = species;
        this.name = name;
    }

    displayAnimalinfo () {
        console.log(`Animal Species = ${this.species}`);
        console.log(`Animal Name = ${this.name}`);

    }
}

const animal1 = new Animal("Dog","Roger");
const animal2 = new Animal("Cat","Luna");

animal1.displayAnimalinfo();
console.log("")

animal2.displayAnimalinfo();

class MathUtilies {

    static PI = 3.14;

    static even_odd (num) {
        if (num % 2 == 0) {
            console.log(`${num} is Even`)
        } else {
            console.log(`${num} is Odd`)
        }
    } 

    static positvie_negative (num) {
        if (num > 0) {
            console.log(`${num} is Positive`)
        } else if (num < 0) {
            console.log(`${num} is Negative`)
        } else {
            console.log(`${num} is Equal to Zero`)
        }
    } 

    static circumference (radius) {
        console.log(`Circumference = ${2 * MathUtilies.PI * radius}`)
    }


}

Math.even_odd(9);
Math.positvie_negative(-18);
Math.circumference(4);

class User {
    static usercount = 0;
    constructor (name, age) {
        this.name = name;
        this.age = age;
        User.usercount += 1
    }

    displayUserInfo () {
        console.log(`User's Name = ${this.name}`)
        console.log(`User's Age = ${this.age}`)

    }
}

user1 = new User("Abdul Rahim",40)
user1.displayUserInfo()


class Vehicle {
    constructor (year) {
        this.year = year
    }

    show_info() {
        console.log(`This Vehicle was Manufactured in ${this.year}`)
    }
}

class Car extends Vechile {
    constructor (year, color) {
        super(year);
        this.color = color
    }
}
class Bike extends Vechile {
    constructor (year, speed) {
        super(year);
        this.speed = speed
    }
}

const car1 = new Car(2009, "Black");
const bike1 = new Bike(2015, 45);

car1.show_info()
bike2.show_info()

class Laptop {
    constructor (model) {
        this.model = model
    }

    displayDeviceInfo () {
        console.log(`Laptop Model = ${this.model}`)
    }

    set model (new_model) {
        this.model = new_model
    }
}

laptop1 = new Laptop("Intel")
laptop2 = new Laptop("Nvidia")
laptop3 = new Laptop("Hp")

laptop1.displayDeviceInfo()
laptop2.displayDeviceInfo()
laptop3.displayDeviceInfo()
console.log("")

laptop1.model = "A-M-D";
laptop3.model("Intel")

laptop1.displayDeviceInfo()
laptop2.displayDeviceInfo()
laptop3.displayDeviceInfo()
console.log("")



