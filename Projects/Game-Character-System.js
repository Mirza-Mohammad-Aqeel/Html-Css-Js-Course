
class Character {
    constructor (name, health, level) {
        this.name = name,
        this.health = health,
        this.level = level
    }

    displayCharInfo() {
        console.log(`Character = ${this.name}'s Info =`)
        console.log(`== Health = ${this.health}`)
        console.log(`== Level = ${this.level}`)

    }


}

class Warrior extends Character {

    attack() {
        console.log(`${this.name}, the Warrior attacks with his Sword`)
    }
}

class Mage extends Character {

    attack() {
        console.log(`${this.name}, the Mage curses with his Spells`)
    }
}

class Archer extends Character {

    attack() {
        console.log(`${this.name}, the Archer kills with his Arrows`)
    }
}

warrior1 = Warrior("Henry",80, 5)
mage1 = Mage("Jenna",95, 7)
archer1 = Archer("Arther",70, 6)

warrior1.displayCharInfo()

console.log("")

mage1.displayCharInfo()

console.log("")

archer1.displayCharInfo()

console.log("")

warrior1.attack()
mage1.attack()
archer1.attack()






