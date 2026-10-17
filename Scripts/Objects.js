
const person1 = {
    name:"Aqeel",
    age:14,
    religion:"Islam",
    employed :true,
    sayhello : function() {console.log("Assalam Alykum")},

    display_info :function () {

        console.log(`My name is ${this.name}`),
        console.log(`My age is ${this.age}`),
        console.log(`My religion is ${this.religion}`),
        console.log(`Am i Employed ${this.employed}`)


    }
}

const person2 = {
    name:"Ibaad",
    age:8,
    religion:"Christianity",
    employed :false,
    sayhello : function() {console.log("Hello, May God Bless You")},

    display_info : function () {

        console.log(`My name is ${this.name}`),
        console.log(`My age is ${this.age}`),
        console.log(`My religion is ${this.religion}`),
        console.log(`Am i Employed ${this.employed}`)


    }

}

const person3 = {
    name:"Ghanim",
    age:20,
    religion:"Judaism",
    employed : true,
    sayhello : function() {console.log(`Shalom Aleykhum, I am ${this.name}`)},

    display_info : function () {

        console.log(`My name is ${this.name}`),
        console.log(`My age is ${this.age}`),
        console.log(`My religion is ${this.religion}`),
        console.log(`Am i Employed ${this.employed}`)


    }

}

console.log(person2.religion);
console.log(person1.name);
console.log(person2.age);

person1.display_info()
person2.display_info()
person3.display_info()

function Car(color, year) {
    this.color = color,
    this.year = year
    this.drive = function () {console.log(`You are driving a ${this.color} Car, made in ${this.year}`)}
}

const car1 = new Car("Red",2009)
const car2 = new Car("Silver",2017)

console.log(car1.color);
console.log(car1.year);
console.log("")

console.log(car2.color);
console.log(car2.year);
console.log("")

console.log(car3.color);
console.log(car3.year);
console.log("")

car1.drive();
car2.drive();
console.log("hi")









 
 