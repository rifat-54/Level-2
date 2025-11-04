const number=[1,9,3,7,5]

const hasEven=number.some((num)=>num%2===0)

// console.log(hasEven);

// const currentRole=["user","editor","admin"]
// const featureAccessRole=["admin","manager"]

// const canAccess=currentRole.some((role)=>featureAccessRole.includes(role))

// console.log(canAccess);


//? from

// const arr=Array.from({length:5}).fill(0)
// const arr=Array.from({length:5},(_,i)=>i)  // _ => element and i => index

// const arr=Array.from([1,2,3],(value,i)=>value*value)

// console.log(arr);

// ? make a array to a spesic range

const rangeArray=(start,stop,step)=>Array.from({length:Math.ceil(stop-start/step)},(_,i)=>start+i*step)

console.log(rangeArray(5,11,4));