
class Animal {
    constructor (species, name, age) {
        this.name = name,
        this.species = species,
        this.age = age
    }
    
    displayAnimalInfo () {
        console.log(`${this.name}'s Info =`)
        console.log(`== Species = ${this.species}`)
        console.log(`== Age = ${this.age}`)

    }

    eat () {
        console.log(`${this.name}, Your ${this.species} is eating`)
    }

    sleep () {
        console.log(`${this.name}, Your ${this.species} is sleeping`)
    }
}

class Dog extends Animal {

    makeSound () {
        console.log(`${this.name}, Your ${this.species} says Woof Woof`)
    }
}

class Cat extends Animal {

    makeSound () {
        console.log(`${this.name}, Your ${this.species} says Meow Meow`)
    }
}

class Bird extends Animal {

    makeSound () {
        console.log(`${this.name}, Your ${this.species} says Chirp Chirp`)
    }
}

dog1 = Dog("Dog","Roger",4)
cat1 = Cat("Cat","Luna",7)
bird1 = Bird("Bird","Joe",11)

dog1.displayAnimalInfo()
console.log("")
cat1.displayAnimalInfo()
console.log("")
bird1.displayAnimalInfo()
console.log("")

dog1.eat()
dog1.sleep()
dog1.makeSound()
console.log("==============")
cat1.eat()
cat1.sleep()
cat1.makeSound()
console.log("==============")
bird1.eat()
bird1.sleep()
bird1.makeSound()
