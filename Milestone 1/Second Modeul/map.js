const course1={name:"programming hero"}
const course2={name:"next level dev"}

// const map=new Map()

// map.set(false,'ke ra')

// map.set(course1,{couseId:"level 1"})
// map.set(course2,{couseId:"level 2"})

// console.log(map);
// map.clear()
// map.delete(course1)
// console.log(map.has(course1));
// console.log(map.size);

// map.forEach((value,key)=>console.log("key: ",key,"value: ",value))
// map.forEach((value,key)=>key.name="new text added "+key.name)
// console.log(map);


// console.log([...map.keys()]);
 
// console.log([...map.values()]);

// for(let key of map.keys()){
//     // console.log(key);
//     key.name="from new text "+key.name
// }

// console.log(map);

// console.log(map.entries());


const course=[[course1,'level1'],
[course2,'level22']]

const map=new Map(course)
console.log(map);