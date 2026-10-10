
let fruits = ["apples","oranges","bananas"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[2]);

fruits[1] = "coconuts";
fruits[2] = "grapes";

fruits.push("mangoes");
console.log(fruits);

console.log(`Number of fruits = ${fruits.length}`);

for (let fruit of fruits) {
    console.log(fruit);
}

