const number = [10, 50, 90, 40, 60,30];
const fruits = ["apple", "Banana", "mango", "Orange", "grapes"];

// const data=number.sort((a,b)=>b-a)

fruits.sort((a,b)=>a.localeCompare(b))

// console.log(data);
console.log(fruits);