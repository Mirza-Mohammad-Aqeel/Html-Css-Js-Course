
const marks = [45,67,82,39,91,55,73];

const display = (element) => console.log(element)
const above60 = (element) => element >= 60;
const bonus = (element) => element += 5;
const total = (el1, el2) => el1 + el2;


marks.forEach(display)

good_marks = marks.filter(above60)
good_marks.forEach(display)

bonus_marks = marks.map(bonus)
bonus_marks.forEach(display)

total_marks = marks.reduce(total)
total_marks.forEach(display)

