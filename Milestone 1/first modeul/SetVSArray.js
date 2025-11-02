// const arr=["apple","banana","mango","apple"]

const arr = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Pineapple",
  "Grapes",
  "Strawberry",
  "Watermelon",
  "Papaya",
  "Cherry",
  "Peach",
  "Guava",
  "Lychee",
  "Kiwi",
  "Blueberry",
  "Raspberry",
  "Pear",
  "Pomegranate",
  "Coconut",
  "Dragon Fruit"
];



console.time('arry');
// brute forse
const removeDupArray=(arr)=>{
    const newArry=[]
    arr.map((element)=>{
        if(!newArry.includes(element)){
            newArry.push(element)
        }
    })
    return newArry;
}

// removeDupArray(arr)
console.log(removeDupArray(arr).length);

console.timeEnd('arry');

console.time('set');
const set=new Set(arr)
const newSetAry=Array.from(set)
console.log(newSetAry.length);
console.timeEnd('set');