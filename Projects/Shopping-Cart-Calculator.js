
const prices = [500,1200,750,300,2000,450];

displayeach = (element) => console.log(element);
costly = (element) => element > 700;

discount = (element) => element * 0.90;
calculatetotal = (el1, el2) => el1 + el2;

prices.forEach(displayeach)

costly_prices = prices.filter(costly)
costly_prices.forEach(displayeach)

discounted = prices.map(discount)
discounted.forEach(displayeach)

total = prices.reduce(calculatetotal)
console.log(`Total = ${total}`)

