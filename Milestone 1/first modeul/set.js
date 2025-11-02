// const set=new Set()

// set.add("apple")
// set.add('banana')
// set.add('mango')
// set.add("apple")

// console.log(set)

const arr=["apple","banana","mango","apple"]
const set=new Set(arr)
// console.log(set);

// set.forEach(item=>console.log(item))

// convert set to array
// const testArry=Array.from(set)
// console.log(testArry);

// set has a find method it's name has

const isExit=set.has("apple")
console.log(isExit);

// set has a delete method 

console.log(set.delete("apple"));  // return true
console.log(set);
